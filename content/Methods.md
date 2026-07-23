# Methods

In this project, a starterkit provides you a set of tools, templates and workflows to have a head start on your project. We follow the logic below (not in pdf):

+++{"no-pdf": true}
```{mermaid} 
:label: mermaid_flowchart
flowchart TD
    A["starterkit"] --> B["own repo"]
    B --> C["edits"]
    C --> D["Automated PDF"]
    C --> E["Automated HTML"]
    D -- included in --> E
    D --> F["final tweaks on pdf"]
```
+++

The starterkit is copied to your own repository. With every commit to your repository, the website and pdf are updated. You may want to do some final tweaks to the final version of your pdf. 