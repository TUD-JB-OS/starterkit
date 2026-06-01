// JB plugin checking the latest update per page, slotting in that date in the frontmatter

import { execSync } from 'child_process';
import path from 'path';
import { readFileSync } from 'fs';

// Cache per build-run (key = absolute file path)
const gitDateCache = new Map();

function getFrontmatter(srcPath) {
  try {
    const text = readFileSync(srcPath, 'utf-8');
    const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);

    if (!match) return null;

    const frontmatterBlock = match[1];
    const data = {};

    frontmatterBlock.split('\n').forEach((line) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        if (value.toLowerCase() === 'false') data[key.trim()] = false;
        else if (value.toLowerCase() === 'true') data[key.trim()] = true;
        else data[key.trim()] = value;
      }
    });

    return data;
  } catch {
    return null;
  }
}

function getRepoRoot() {
  return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
}

function getGitUpdatedISOForFile(filePathAbs) {
  if (gitDateCache.has(filePathAbs)) return gitDateCache.get(filePathAbs);

  try {
    const repoRoot = getRepoRoot();
    const rel = path.relative(repoRoot, filePathAbs).replace(/\\/g, '/');

    const iso = execSync(`git log -1 --follow --format=%cI -- "${rel}"`, {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    const result = iso || null;
    gitDateCache.set(filePathAbs, result);
    return result;
  } catch {
    gitDateCache.set(filePathAbs, null);
    return null;
  }
}

function formatDate(iso) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(d);
}

const updateDateTransform = {
  name: 'update-date',
  stage: 'document',
  plugin: () => {
    return (node, file) => {
      if (!file?.path) return node;

      const isPDF = process.argv.some(
        (arg) => arg.includes('pdf') || arg.includes('typst'),
      );
      if (isPDF) return node;

      const frontmatter = getFrontmatter(file.path);
      if (frontmatter?.['no-update-date'] === true) return node;

      const iso = getGitUpdatedISOForFile(file.path);
      if (!iso) return node;

      const alreadyInserted = node.children?.some(
        (child) =>
          child.type === 'div' &&
          child.class?.includes('updated-date-container'),
      );

      if (alreadyInserted) return node;

      node.children.unshift({
        type: 'div',
        class: 'font-light text-sm mb-4 updated-date-container',
        children: [{ type: 'text', value: `Updated: ${formatDate(iso)}` }],
      });

      return node;
    };
  },
};

const plugin = {
  name: 'Auto Update Date Plugin',
  transforms: [updateDateTransform],
};

export default plugin;