---
abstract: |
    In this demo, we demonstrate how Jupyter Book can be used to create and publish a content rich paper that includes 
    interactive elements such as code cells, visualizations, and multimedia. We will walk through the process of setting 
    up a Jupyter Book, adding content, and deploying the final product online.
---

# Introduction

Jupyter Book has been rebuild from ground up using the MyST engine [@doi:10.25080/hwcj9957]. This allows to export content in multiple output formats including HTML, PDF and docx. In this paper we present an overview of the possibilities and demonstrate its working.

## Background
Some background information about Jupyter Book and its features, like exporting to multiple formats as indicated in {numref}`fig-diagram`.

```{figure} ../figures/diagram.*
:label: fig-diagram
:alt: Some figure

Some figure
```


+++{"no-pdf":true}
```{figure} ../figures/delft.*
:label: fig-delft
:alt: picture of the TUD

A figure that is in the website but not in the PDF version.
```
+++