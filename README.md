# Chenyue Li's academic homepage

A responsive, build-free academic homepage for GitHub Pages.

- `index.html`: biography, publications, projects, education, experience, and awards.
- `stylesheet.css`: page layout and responsive styles.
- `images/`: existing research figures and other original assets.

The profile photo is intentionally blank. To add a photo, replace the
`portrait-placeholder` div in `index.html` with:

```html
<img class="portrait" src="images/photo.jpg" alt="Chenyue Li" width="148" height="148">
```

The current publication text and submission statuses follow the supplied homepage draft.
Publications are grouped by research area and use consistent text-first entries.
Keep each publication's links inside its `paper-links` paragraph.
The design uses local serif fonts and inline SVG icons, with no external font or icon dependencies.

GitHub Pages can serve these files directly from the repository's `master` branch
and root folder; no dependencies or build step are required.

## Acknowledgments

The earlier version of this repository used [Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website)
as its starting point. The updated HTML and CSS retain a simple academic-homepage layout.

The current visual design takes inspiration from [Qinlin Zhao's homepage](https://icecream-and-tea.github.io/): serif typography, muted blue accents, and compact publication groups.
