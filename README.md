# Tang Lab Website Package — No Logo Version

This is a clean static website package for the Tang Laboratory. It is designed for direct upload to GitHub Pages or another static web host.

## Files

- `index.html` — homepage
- `research.html` — research areas and methods
- `people.html` — lab member profiles
- `publications.html` — publication links and manuscript-in-preparation section
- `contact.html` — contact information
- `style.css` — full site styling
- `script.js` — mobile menu, active nav state, and dynamic year
- `assets/` — portraits and initials-based placeholders

## Design choice

This version intentionally removes the lab logo and uses a text-only academic header. The layout is original and conservative, closer to a clean university lab website than a brand-heavy design.

## How to publish on GitHub Pages

1. Upload all files and folders to the repository root.
2. Keep `.nojekyll` in place.
3. In GitHub, go to Settings → Pages.
4. Select the branch and root folder.
5. Save and wait for Pages to deploy.

## Easy edits

- Update lab members in `people.html`.
- Add confirmed papers in `publications.html`.
- Adjust colors in the `:root` section of `style.css`.
- Replace placeholder avatars by adding real photos to `assets/` and changing the image paths in `people.html`.
