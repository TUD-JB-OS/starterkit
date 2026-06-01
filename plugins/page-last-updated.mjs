// JB plugin: insert the latest Git update date once per page.

import { execFileSync } from 'child_process';
import path from 'path';
import { readFileSync } from 'fs';

const gitDateCache = new Map();
const insertedForFile = new Set();

function getFrontmatter(srcPath) {
  try {
    const text = readFileSync(srcPath, 'utf-8');
    const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    if (!match) return null;

    const data = {};
    for (const line of match[1].split('\n')) {
      const [key, ...valueParts] = line.split(':');
      if (!key || !valueParts.length) continue;

      const value = valueParts.join(':').trim();
      if (value.toLowerCase() === 'true') data[key.trim()] = true;
      else if (value.toLowerCase() === 'false') data[key.trim()] = false;
      else data[key.trim()] = value;
    }

    return data;
  } catch {
    return null;
  }
}

function getRepoRoot() {
  return execFileSync('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf8',
  }).trim();
}

function getGitUpdatedISOForFile(filePathAbs) {
  if (gitDateCache.has(filePathAbs)) return gitDateCache.get(filePathAbs);

  try {
    const repoRoot = getRepoRoot();
    const rel = path.relative(repoRoot, filePathAbs).replace(/\\/g, '/');

    const iso = execFileSync(
      'git',
      ['log', '-1', '--follow', '--format=%cI', '--', rel],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      },
    ).trim();

    const result = iso || null;
    gitDateCache.set(filePathAbs, result);
    return result;
  } catch {
    gitDateCache.set(filePathAbs, null);
    return null;
  }
}

function formatDate(iso) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(iso));
}

function hasInsertedDate(node) {
  return node.children?.some(
    (child) =>
      child?.type === 'div' &&
      typeof child.class === 'string' &&
      child.class.includes('updated-date-container'),
  );
}

const updateDateTransform = {
  name: 'update-date',
  stage: 'document',
  plugin: () => {
    return (tree, file) => {
      if (!file?.path) return tree;
      if (!Array.isArray(tree?.children)) return tree;

      // Only mutate the actual document/root node.
      if (tree.type && !['root', 'document'].includes(tree.type)) return tree;

      const isPDF = process.argv.some(
        (arg) => arg.includes('pdf') || arg.includes('typst'),
      );
      if (isPDF) return tree;

      const absPath = path.resolve(file.path);

      // Hard guard: once per file per build run.
      if (insertedForFile.has(absPath)) return tree;

      const frontmatter = getFrontmatter(absPath);
      if (frontmatter?.['no-update-date'] === true) return tree;

      if (hasInsertedDate(tree)) {
        insertedForFile.add(absPath);
        return tree;
      }

      const iso = getGitUpdatedISOForFile(absPath);
      if (!iso) return tree;

      tree.children.unshift({
        type: 'div',
        class: 'font-light text-sm mb-4 updated-date-container',
        children: [{ type: 'text', value: `Updated: ${formatDate(iso)}` }],
      });

      insertedForFile.add(absPath);
      return tree;
    };
  },
};

export default {
  name: 'Auto Update Date Plugin',
  transforms: [updateDateTransform],
};