# Group photos

Upload future Tang Lab group photos into this folder.

Supported source formats:
- .jpg / .jpeg
- .png
- .webp

You can upload several files at once. Use simple filenames such as:
- asv-2026.jpg
- lab-dinner-2026.jpg
- group-2027.jpg

Do not upload files into the generated `web` or `thumbs` folders.

After you upload and commit the photos to `main`, GitHub Actions will automatically:
1. make a smaller web copy,
2. make a thumbnail,
3. update `gallery.json`.

The People page reads `gallery.json` automatically, so no HTML editing is needed for new photos.
