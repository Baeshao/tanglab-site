# Tang Lab Website

Static website for the Tang Laboratory at Howard University College of Medicine.

Live site: https://baeshao.github.io/tanglab-site/

## Structure

```text
.
├── index.html
├── research.html
├── people.html
├── publications.html
├── contact.html
├── 404.html
├── README.md
├── docs/
│   └── source-notes.md
├── assets/
│   ├── branding/
│   ├── css/
│   ├── js/
│   └── images/
│       ├── people/
│       │   └── placeholders/
│       ├── research/
│       └── group-photos/
│           ├── originals/
│           ├── web/
│           ├── thumbs/
│           └── gallery.json
└── .github/
    └── workflows/
```

## Common updates

- Add group photos to `assets/images/group-photos/originals/`. The workflow generates web copies, thumbnails, and `gallery.json`.
- Add approved member portraits to `assets/images/people/`.
- Edit site styling in `assets/css/style.css`.
- Edit site behavior in `assets/js/script.js`.
- Source verification notes are in `docs/source-notes.md`.

GitHub Pages deploys automatically from `main`.
