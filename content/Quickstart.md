
# Use the starterkit

> The instructions on this page guide you through the process of setting up your own thesis (repo) by creating a (new) GitHub repository using the starterkit template repository.


## Create a repository 

We assume you have a GitHub account and are logged in. If not, please [create an account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) and log in first. Follow these instruction to use the GitHub template repository to create your own thesis repository:

### Step 1
1. Go to the [use the starterkit template](https://github.com/new?template_name=starterkit&template_owner=TUD-JB-OS)
2. Choose a proper name of your repository (this will be also part of your URL!) and leave visibility as `public`.
3. Click the green `Create repository` button, this will start copying all files to your newly created repository.

+++{"no-pdf":true}
```{iframe} https://www.youtube.com/embed/e_0xCg2l3Sw?si=P6_3QAByISVifOgh
:name: vid_1

Follow these steps to create your own repository from the template.
```
+++

### Step 2
4. You were directed to the main page of your repository, all files have been copied but the settings were not. 
5. Click on ![](figures/settings.png) and in the left menu on ![](figures/pages.png) and change `source: Deploy from a branch` to `source: Github Actions`

### Step 3
5. Click on ![](figures/code.png) in the top left corner and click on ⚙ (the `gear-icon` near **About**) at the right site of the page. 
6. Check the box **Use your GitHub Pages website**.
7. Go to ![](figures/actions.png) in the top menu, click on (red) `initial commit` and click `re-run all jobs`

The book will now be deployed again - where now it can actually load GitHub pages! You are all set and done.

+++

## First step
You may want to start with opening the `authors.yml` file and specify your name, your institution and details of your supervisor. 

Next, open the `myst.yml` file, change the title, the keywords, the date and the github url which is set to the original starterkit repo by default.

If you are from another university, you want to change the icons and logo's in the `style` folder, and redirect to these in the `myst.yml` file in the `site - options` section.

```{important} specify correct github repo
In using the template repo, some information that belongs to the original repo are copied as well. It is important to open the `myst.yml` file and set the github url to your own. 
```


## View your thesis online

The previous steps set up your repository with GitHub Pages using a GitHub Actions workflow. That action automatically builds your book (a website) and deploys it online. The URL of your book is based on your GitHub username:

```
https://USERNAME.github.io/<reponame>
```


You can also find the link easily from you GitHub repository home page under the "About" section on the right-hand side (illustrated in  {numref}`Figure {number} <fig_folderstructure>`).

You also have automatically two pdf's based on a LaTeX thesis and Typst thesis template. Two buttons can be found at the top right corner to inspect these pdf's.

```{figure} figures/folderstructure.png
:label: fig_folderstructure
```

## Ready?
Ready to write your thesis? Comment out this page in the `toc.yml` file: `- file: content/Quickstart.md` and your thesis repo is set. You can edit the existing files and / or add new files.

Not familiar with GitHub, VSC, markdown and/or Jupyter Book? All necessary information is covered in our [TUD guide to open publishing with JupyterBook](https://tud-jb-os.github.io/book/). We included a link in the footer. More information is also available in the official [Jupyter Book documentation](https://jupyterbook.org/). For quick references, we included a [cheatsheet](./Cheatsheet.md). Problems with typst output? See the automatically build [errorlog](../errorlog.md).