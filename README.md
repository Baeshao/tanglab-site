# Tang Lab Website

Static website for the Tang Laboratory at Howard University College of Medicine.

## Files

```text
index.html
research.html
people.html
publications.html
contact.html
404.html
style.css
script.js
.nojekyll
assets/
  favicon.svg
  logo/
  avatars/
  images/
SOURCE_NOTES.md
```

## GitHub Pages

1. Open the repository settings.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/** root
4. Save.

## Updating content

- Edit page text directly in the corresponding `.html` file.
- Replace people photos in `assets/images/` and update paths in `people.html` when needed.
- Add selected publications as `<article class="publication-card">` blocks in `publications.html`.
- Clearly label preprints as not peer reviewed.
- Keep source notes in `SOURCE_NOTES.md` updated when a title, role, research area, or publication changes.

## Design choices

- The approved Tang Lab tiger logo is stored in `assets/logo/` and styled through `style.css`.
- The favicon is defined by `assets/favicon.svg`.
- No third-party frameworks or remote fonts are required.
- The site is responsive and works on GitHub Pages without a build step.
- The layout is intended for the whole lab, not a single member.
