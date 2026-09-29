# Group photo gallery

Upload new source photos to `assets/images/group-photos/originals/`.

Supported formats: JPG, JPEG, PNG, and WebP.

Examples:
- `asv-2026.jpg`
- `group-dinner-2026.jpg`
- `group-2027.jpg`

After a commit to `main`, GitHub Actions generates:
- `web/` — optimized full-size website copies
- `thumbs/` — gallery thumbnails
- `gallery.json` — gallery manifest used by the People page

Do not manually edit generated files.
