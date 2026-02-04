# Use the starterkit

The instructions on this page guide you through the process of making your own book by creating a (new) GitHub repository from the starterkit template repository.

More information on the working with Jupyter Book can be found in [The TUD guide to open publishing with JupyterBook](https://tud-jb-os.github.io/book/) or the official [Jupyter Book documentation](https://jupyterbook.org/).

## Create a repository 

Follow these instruction to use the GitHub template repository to create your own book for this workshop:

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

## View your book online

The previous steps set up your repository with GitHub Pages using a GitHub Actions workflow. That action automatically builds your book (a website) and deploys it online. The URL of your book is based on your GitHub username:

```
https://USERNAME.github.io/workshop-template
```
It also creates automatically two pdf's based on a LaTeX thesis and Typst thesis template. 

You can also find the link easily from you GitHub repository home page under the "About" section on the right-hand side (illustrated in {numref}`Figure {number} <fig_folderstructure>`).

The home page of your new book website should look like {numref}`Figure {number} <fig_startscreen>`.

```{figure} figures/startscreen.png
:name: fig_startscreen
:width: 100%

The home page of your new site, which you can visit once the GitHub Action workflow has successfully completed.
```

```{tip}
Checkout the content on your mobile phone as well! It just looks amazing.
```

## Repo folder structure

Your GitHub repository may look similar to the one shown in {numref}`fig_folderstructure`; note the following directories:

- `content`: the source files of your book (in markdown or jupyter notebook format),
- `figures`: the folder which includes figures for your book,
- `.github/workflows`: the folder which includes the GitHub Actions (automated workflows) to build and deploy your book, including the build of the pdf
- `css`: a folder which includes a custom css file to change the layout of your book,
- A `myst.yml` file which defines the structure and settings of your Jupyter Book.

```{figure} figures/Folderstructure.png
:name: fig_folderstructure
:width: 100%

Illustration of repository folder structure.
```

As proceed through the workshop you will edit the files in your new repository.

## Edit the book

You have a number of options for making changes to the book's source and seeing how they affect the output.

::::{tab-set}
:::{tab-item} Locally

1. Clone the repository to your local machine using Git.

```console
git clone git@github.com:<github_user_name>/workshop-template.git
```

2. Install Jupyter Book, using the virtual environment manager of your choice (all of the tools used today can easily be handled using `pip`)

```console
pip install -r requirements.txt
```

3. Make a change to one of the files in the `content` directory using a text editor.

4. (optional) Commit the the change using Git and push it to the remote repository (this will trigger the GitHub Actions workflow and rebuild the website, which can be viewed at the same URL described above). If you go back to your repository and click on the `Actions` tab you will see that the workflow is running to build and deploy your book. After a few minutes, you can refresh your book page and see your changes!

5. Build the book from source and serve it locally.

```console
jupyter book start
```

5. Preview the book in your browser at [`http://localhost:3000`](http://localhost:3000)

```{tip}
The localhost address may be different than `3000` (check the CLI output).

Once the MyST server is running, it will automatically update as you make changes to the source.
```
:::
:::{tab-item} Online

To work online, you must "edit" a file by making a commit using GitHub's online tools:

1. Click on the `index.md` file in the Content folder
2. Click on the drop down icon next to the pencil icon and choose `open in github.dev` This will start the GitHub development environment where you can edit the files directly in your browser.
3. Edit the file by replacing the names with your own and commit your changes, see [](#vid_3)

```{iframe} https://www.youtube.com/embed/MIJUMsTEfzY?si=upISYp21twTtAIFs
:name: vid_3

Working directly in the GitHub development environment.
```

Now, if you go back to your repository and click on the `Actions` tab you will see that the workflow is running to build and deploy your book. After a few minutes, you can refresh your book page and see your changes!
:::
::::

## Create a PDF export
A clear advantage of JB2 over JB1 is the ability to easily create a high quality PDF export of your book (as well as other formats). In a [later lesson of this workshop](#pdfoutput), we will build a PDF locally and/or modify the GitHb Action workflow to automatically create a PDF export of your book using Typst when changes are pushed changes to your repository.