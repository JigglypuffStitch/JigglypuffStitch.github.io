# Chenyue Li's academic homepage

A responsive, build-free academic homepage for GitHub Pages.

- `index.html`: biography, publications, projects, education, experience, and awards.
- `stylesheet.css`: responsive layout, typography, and figure viewer styles.
- `site.js`: accessible image enlargement; image links also work without JavaScript.
- `images/`: publication figures and the SHAPE conceptual overview.

The profile photo is intentionally blank. To add a photo, replace the hidden
`portrait-placeholder` div in `index.html` with:

```html
<img class="portrait" src="images/photo.jpg" alt="Chenyue Li" width="160" height="160">
```

The publication text, authors, and submission statuses follow the supplied homepage draft.
Each paper has a figure preview on the left and its complete description on the right.
Click a figure to enlarge it, press Escape or Close to dismiss it, or open it in a new tab.
The mobile layout places figures above the corresponding text.

## Figure sources

- **BioThread:** Figure 2 (dataset construction) from the author's supplied BioThread manuscript. The thumbnail and enlarged view show the same complete figure.
- **ScreenHaystack:** Figure 2 from the [public paper](https://aclanthology.org/2026.emnlp-main.904/).
- **Reasoning and decision stability:** The exact overview image supplied by the author, used for both preview and enlarged view. Equal-contribution markers are omitted as requested.
- **Re-ID survey and AdaFreq:** original research figures already in this repository.
- **SHAPE:** an original conceptual overview based on the supplied project description. This is a schematic, not an experimental result or a reproduced manuscript figure.

GitHub Pages serves the repository's `master` branch and root folder directly.
There are no dependencies, external fonts, analytics, or build steps.

## Design references

The layout draws on the clear hierarchy and figure-led research lists of
[Cheng Chi](https://cheng-chi.github.io/) and the concise presentation of
[Shunyu Yao](https://ysymyth.github.io/), using an original implementation.
The earlier repository was based on [Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website).
