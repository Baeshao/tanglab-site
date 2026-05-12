# Tang Lab Website

Static website package for the Tang Laboratory at Howard University College of Medicine.

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
  avatars/
  images/
SOURCE_NOTES.md
```

## GitHub Pages upload

1. Create or open the GitHub repository for the lab website.
2. Upload all files and folders in this package to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/** root
5. Save. GitHub Pages usually publishes within a few minutes.

## Updating content

- Edit page text directly in the corresponding `.html` file.
- Replace people photos in `assets/images/` and update the image path in `people.html`.
- Add publications as new `<article class="publication-card">` blocks in `publications.html`.
- Keep source notes in `SOURCE_NOTES.md` updated when a title, role, or publication changes.

## Design choices

- No lab logo is used.
- No third-party frameworks or remote fonts are required.
- The site is responsive and should work on GitHub Pages without a build step.
- The layout is intended for the whole lab, not a single member.
