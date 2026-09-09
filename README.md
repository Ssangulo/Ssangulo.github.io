# Personal site — Daniel Angulo Serrano

A plain static website (HTML + CSS + a little JavaScript). No build step, no
framework, no dependencies: what is in this folder is exactly what gets served.

Live at **https://Ssangulo.github.io** once the repository is pushed and Pages
is enabled.

## Files

```
index.html          Home — hero, about, skills, selected work, contact
research.html       Projects, publications, code
field.html          Photo gallery (built from assets/photos.js)
assets/style.css    All styling. Colours are the :root variables at the top.
assets/photos.js    THE PHOTO LIST — the only file to edit to add a photo
assets/gallery.js   Grid + lightbox machinery (no need to touch)
images/field/       Field photographs
images/site/        Portrait and favicon
.nojekyll           Tells GitHub Pages to serve the files as-is
```

## How to edit

**Text.** Open the `.html` file and type. Everything meant for you to change is
marked with an `<!-- EDIT: ... -->` comment. You can do this directly in the
GitHub web interface (open the file → pencil icon → Commit changes).

**Add a field photo.**
1. Drop the image into `images/field/` (JPEG is fine; ~2000 px on the long
   edge and under ~500 KB keeps the page fast).
2. Add one block to the list in `assets/photos.js`:
   ```js
   {
     src: "images/field/ptarmigan-track.jpg",
     alt: "Ptarmigan tracks crossing fresh snow",
     caption: "Fresh tracks on the transect line",
     where: "Lifjellet, Lierne · March 2025"
   },
   ```
3. Commit. The gallery and lightbox pick it up automatically.

**Add a project.** In `research.html`, copy an entire
`<article class="project"> … </article>` block, change the `id`, title, years
and text.

**Add a publication.** In `research.html`, copy one `<li>` inside `<ul class="pubs">`.

**Change the colours.** Edit the variables in the `:root` block at the top of
`assets/style.css`. `--accent` is the green used for links and buttons,
`--accent-2` the ochre used for the small uppercase labels. The dark-mode
palette is the `@media (prefers-color-scheme: dark)` block just below; the site
follows whatever theme the reader's device is set to.

**Preview locally before pushing** (optional):
```bash
cd ~/Ssangulo.github.io
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing

The repository must be named exactly `Ssangulo.github.io` for it to serve at
the root of that address. After pushing, go to
**Settings → Pages** and set *Source* to `Deploy from a branch`, branch `main`,
folder `/ (root)`. The first build takes a minute or two.
