(quickstart)=
# Use the starterkit

> The instructions on this page guide you through the process of setting up your own thesis (repo) by creating a (new) GitHub repository using the starterkit template repository.


## Create your own project online

We assume you have a GitHub account and are logged in. If not, please [create an account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) and log in first. Follow these instruction to use the GitHub template repository to create your own thesis repository:

### 1. Create your own repository
1. Go to the [use the starterkit template](https://github.com/new?template_name=starterkit&template_owner=TUD-JB-OS)
2. Choose a proper name of your repository (this will be also part of your URL!) and leave visibility as `public`.
3. Click the green `Create repository` button, this will start copying all files to your newly created repository.

+++{"no-pdf":true}
```{iframe} https://www.youtube.com/embed/e_0xCg2l3Sw?si=P6_3QAByISVifOgh
:name: vid_1

Follow these steps to create your own repository from the template.
```
+++

### 2. Launch your website
4. You were directed to the main page of your repository, all files have been copied but the settings were not. 
5. Click on ![](figures/settings.png) and in the left menu on ![](figures/pages.png) and change `source: Deploy from a branch` to `source: Github Actions`
5. Click on ![](figures/code.png) in the top left corner and click on ⚙ (the `gear-icon` near **About**) at the right site of the page. 
6. Check the box **Use your GitHub Pages website**.
7. Go to ![](figures/actions.png) in the top menu, click on (red) `initial commit` and click `re-run all jobs`

The book will now be deployed again - where now it can actually load GitHub pages! You are all set and done.

+++

## Work locally
You can work directly in the GitHub IDE, but you may prefer to work on the project locally. To do this, you will need Git and Pixi. Pixi is a package manager that installs and manages all dependencies required for the project.

1. **Install git:** If Git is not already installed on your computer, download and install it from the [git website](https://git-scm.com/).
2. **Install pixi:** Download and install Pixi by following the instructions in the [pixi documentation](https://pixi.prefix.dev/latest/installation/).
3. **Clone the repository:** Open a terminal, such as the VS Code terminal, PowerShell, or another terminal of your choice. Navigate to the folder where you want to store the project and run: `git clone <repository-link>` This creates a local copy of the repository on your computer. Next, navigate into the newly created project folder: `cd <project-folder>`
4. **Install the project dependencies** From inside the project folder, run: `pixi install` Pixi will install all dependencies required to work on the project.

Three Pixi tasks are provided to make working with the project easier. You can run the following commands in the terminal:

- **Open the editor:** `pixi run editor` will open jupyterlab as editor
- **Preview the Jupyter Book:** `pixi run preview` will open a jupyter server which runs your jupyter book as website in the browser
- **Create a PDF:** `pixi run pdf` will create a pdf version of your project
 

