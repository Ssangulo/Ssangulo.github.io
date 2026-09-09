# Personal site — Daniel Angulo Serrano

A plain static website (HTML + CSS + a little JavaScript). No build step, no
framework, no dependencies: what is in this folder is exactly what gets served.

Live at **https://Ssangulo.github.io** once the repository is pushed and Pages
is enabled.

## Files

```
index.html            Home — hero, about, skills, selected work, contact
research.html         Projects, publications, press, code
field.html            Photo gallery (built from assets/photos.js)
assets/style.css      All styling. Colours are the :root variables at the top.
assets/photos.js      THE PHOTO LIST + the group list — the only file to edit
                      to add a photo or start a new collection
assets/gallery.js     Grid + lightbox machinery (no need to touch)
tools/prep_photo.py   Resizes a photo for the web and strips its GPS/EXIF
images/field/         Field photographs
images/site/          Portrait, favicon, research-page images
.nojekyll             Tells GitHub Pages to serve the files as-is
```

## How to edit

**Text.** Open the `.html` file and type. Everything meant for you to change is
marked with an `<!-- EDIT: ... -->` comment. You can do this directly in the
GitHub web interface (open the file → pencil icon → Commit changes).

**Add a field photo.**

1. Run it through the prep script. This resizes it for the web **and strips the
   metadata — including the GPS coordinates your phone records.** The site is
   public, so never commit a photo straight off the camera.
   ```bash
   python3 tools/prep_photo.py ~/photos/IMG_1234.jpg images/field/ptarmigan-track.jpg
   ```
2. Add one block to `PHOTOS` in `assets/photos.js`:
   ```js
   {
     src: "images/field/ptarmigan-track.jpg",
     alt: "Ptarmigan tracks crossing fresh snow",
     caption: "Fresh tracks on the transect line",
     where: "Lifjellet, Lierne · March 2025",
     group: "Ptarmigan — Lierne, Norway",
     note: "Optional longer line, shown only in the lightbox."
   },
   ```
3. Commit. The gallery and lightbox pick it up automatically.

**Start a new collection** (Colombia, Trinidad, wherever next). Add a line to
`GROUPS` at the top of `assets/photos.js`, then use that name as the `group` on
the photos:
```js
const GROUPS = [
  { name: "Páramo — Colombia", blurb: "One line about the campaign." },
  …
];
```
`GROUPS` order is the order the sections appear. A group with no photos yet
renders nothing, so you can add the heading before the photos arrive. If a
photo's `group` matches no group name, it still shows up — in a "More" section
at the bottom — so a typo can't hide it.

**Add a project.** In `research.html`, copy an entire
`<article class="project"> … </article>` block, change the `id`, title, years
and text.

**Add a publication.** In `research.html`, copy one `<li>` inside `<ul class="pubs">`.

**Add press coverage.** Copy a `<p class="press">` block inside the relevant
project entry in `research.html`.

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
