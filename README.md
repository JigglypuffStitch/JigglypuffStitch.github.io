# Chenyue Li's academic homepage

A responsive, build-free academic homepage for GitHub Pages.

- `index.html`: biography, publications, projects, education, experience, and awards.
- `stylesheet.css`: responsive layout, typography, and figure viewer styles.
- `site.js`: Selected / All publication filtering and accessible image enlargement; image links also work without JavaScript.
- `images/`: publication figures and original image assets.

The profile portrait is the author's supplied `IMG_7893.jpg`, stored unchanged as
`images/chenyue-li.jpg`. The introduction follows a compact profile header: name and
contact links on the left, a circular portrait on the right, and the biography below.
The portrait is 176 × 176 pixels on desktop and adapts to smaller screens.

The publication text, authors, and submission statuses follow the supplied homepage draft.
Each paper has a figure preview on the left and its complete description on the right.
Click a figure to enlarge it, press Escape or Close to dismiss it, or open it in a new tab.
The mobile layout places figures above the corresponding text.

The publication switch defaults to Selected. Mark featured articles with `data-selected`;
All shows all eight articles: the five featured papers plus PlotGround, MemAdapter,
and Implicit Graph, Explicit Retrieval, confirmed from the author’s supplied Scholar screenshot. Buttons support keyboard activation,
expose the active choice, and announce the visible count. With JavaScript disabled,
all entries remain readable and the switch stays hidden.

## Figure sources

- **BioThread:** Figure 1 (Direct and Stepwise task definition) from the author's supplied BioThread manuscript. The thumbnail and enlarged view show the same complete figure.
- **ScreenHaystack:** Figure 2 from the [public paper](https://aclanthology.org/2026.emnlp-main.904/).
- **Reasoning and decision stability:** The exact overview image supplied by the author, used for both preview and enlarged view. Equal-contribution markers are omitted as requested.
- **Re-ID survey and AdaFreq:** original research figures already in this repository.
- **PlotGround:** Figure 1, pipeline overview, from [arXiv:2610.06825v2](https://arxiv.org/abs/2610.06825v2).
- **MemAdapter:** Figure 2, method overview, from [arXiv:2602.08369v1](https://arxiv.org/abs/2602.08369v1).
- **Implicit Graph, Explicit Retrieval:** Figure 2, LatentGraphMem overview, from [arXiv:2601.03417v1](https://arxiv.org/abs/2601.03417v1).
- **SHAPE:** displayed as text only; no figure is shown.

GitHub Pages serves the repository's `master` branch and root folder directly.
There are no dependencies, external fonts, analytics, or build steps.

## Design references

The profile header is inspired by [Qinlin Zhao](https://icecream-and-tea.github.io/).
The research list draws on the clear hierarchy and figure-led research lists of
[Cheng Chi](https://cheng-chi.github.io/) and the concise presentation of
[Shunyu Yao](https://ysymyth.github.io/), using an original implementation.
The earlier repository was based on [Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website).
