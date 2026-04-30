---
abstract: |
    In this demo, we demonstrate how Jupyter Book can be used to create and publish a content rich paper that includes 
    interactive elements such as code cells, visualizations, and multimedia. We will walk through the process of setting 
    up a Jupyter Book, adding content, and deploying the final product online.
---

# Introduction

Jupyter Book has been rebuild from ground up using the MyST engine [@doi:10.25080/hwcj9957]. This allows to export content in multiple output formats including HTML, PDF and docx. In this paper we present an overview of the possibilities and demonstrate its working.

In an introduction. you often cite. Than can be done in various ways, either using a .bib file or directly using the doi.

**cite with doi**
- `[@doi:10.25080/hwcj9957]` resulting in [@doi:10.25080/hwcj9957]
- `@doi:10.25080/hwcj9957` resulting in @doi:10.25080/hwcj9957

**cite from bib-file**
- `{cite:t}`jupyter2025`` resulting in {cite:t}`jupyter2025`
- `{cite:p}`jupyter2025`` resulting in {cite:p}`jupyter2025`


## Background
Jupyter Book has been rebuild with the intend to export content in multiple output formats including HTML, PDF and docx. {numref}`Figure {number} <fig-diagram>` provides this idea.

```{figure} figures/diagram.*
:label: fig-diagram
:alt: Some figure

The myst engine allows Jupyter Notebook, markdown and even tex files to be converted to multiple output formats.
```

As exporting to different formats is possible, it is not always desired. Some content should only be visible in the HTML version, and some content only need to be included in the PDF version. You can use blocks like `+++{"no-pdf":true}` to enable this, as shown below where the figure is seen in the HTML version but not in the PDF version.

+++{"no-pdf":true}
```{figure} figures/delft.*
:label: fig-delft
:alt: picture of the TUD

A figure that is in the website but not in the PDF version.
```
+++

## With some code

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0,100)
```