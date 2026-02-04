# Use the starterkit

The instructions on this page guide you through the process of making your own book by creating a (new) GitHub repository from the starterkit template repository.

More information on the working with Jupyter Book can be found in [The TUD guide to open publishing with JupyterBook](https://tud-jb-os.github.io/book/) or the official [Jupyter Book documentation](https://jupyterbook.org/).

## Create a repository 

Follow these instruction to use the GitHub template repository to create your own thesis repository.:

1. Go to the [starterkit repository ](https://github.com/TUD-JB-OS/starterkit)
2. Click the green button `use this template` and click `create a new repository`.
3. Choose a proper name of your repository (this will be also part of your URL!) and choose the option `public`.
4. In your repository, click on `settings` and in the left menu on Pages and choose `Github Actions`

```{iframe} https://www.youtube.com/embed/UZpo_S8QNZI?si=dz-xbWzOyUUlIwJ5
:name: vid_1

Follow these steps to create your own repository from the template.
```

5. Click on `code` and click on ⚙ (the `gear-icon` near **About**) at the right site of the page. 
6. Check the box **Use your GitHub Pages website**.
7. Go to `Actions` in the top menu, click on the (red) `initial commit` and click `re-run all jobs`

The book will now be deployed again - where now it can actually load GitHub pages. 

``` {iframe} https://www.youtube.com/embed/gQP_gjrh7rQ?si=DWiL_J27_a35RV__
:name: vid_2

Follow these steps to create your own GH Pages site from the template.
```

## View your thesis online

The previous steps set up your repository with GitHub Pages using a GitHub Actions workflow. That action automatically builds your book (a website) and deploys it online. The URL of your book is based on your GitHub username:

```
https://USERNAME.github.io/<reponame>
```


You can also find the link easily from you GitHub repository home page under the "About" section on the right-hand side (illustrated in {numref}`Figure {number} <fig_folderstructure>`).

You also have automatically two pdf's based on a LaTeX thesis and Typst thesis template. Two buttons can be found at the top right corner to inspect these pdf's.