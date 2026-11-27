# Chenyue Li's academic homepage

A responsive, build-free academic homepage for GitHub Pages.

- `index.html`: biography, publications, projects, education, experience, and awards.
- `stylesheet.css`: responsive layout, typography, and figure viewer styles.
- `site.js`: accessible image enlargement; image links also work without JavaScript.
- `images/`: publication figures and original image assets.

The profile portrait is the author's supplied `IMG_7893.jpg`, stored unchanged as
`images/chenyue-li.jpg`. The introduction follows a compact profile header: name and
contact links on the left, a circular portrait on the right, and the biography below.
The portrait is 176 × 176 pixels on desktop and adapts to smaller screens.

The publication text, authors, and submission statuses follow the supplied homepage draft.
Each paper has a figure preview on the left and its complete description on the right.
Click a figure to enlarge it, press Escape or Close to dismiss it, or open it in a new tab.
The mobile layout places figures above the corresponding text.

## Figure sources

- **BioThread:** Figure 1 (Direct and Stepwise task definition) from the author's supplied BioThread manuscript. The thumbnail and enlarged view show the same complete figure.
- **ScreenHaystack:** Figure 2 from the [public paper](https://aclanthology.org/2026.emnlp-main.904/).
- **Reasoning and decision stability:** The exact overview image supplied by the author, used for both preview and enlarged view. Equal-contribution markers are omitted as requested.
- **Re-ID survey and AdaFreq:** original research figures already in this repository.
- **SHAPE:** displayed as text only; no figure is shown.

GitHub Pages serves the repository's `master` branch and root folder directly.
There are no dependencies, external fonts, analytics, or build steps.

## Design references

The profile header is inspired by [Qinlin Zhao](https://icecream-and-tea.github.io/).
The research list draws on the clear hierarchy and figure-led research lists of
[Cheng Chi](https://cheng-chi.github.io/) and the concise presentation of
[Shunyu Yao](https://ysymyth.github.io/), using an original implementation.
The earlier repository was based on [Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website).
