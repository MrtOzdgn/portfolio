# Mert Özdoğan — Photography Portfolio

A fast, dependency-free static website. Just HTML, CSS and a little JavaScript — no build step, no frameworks, no monthly fees.

## Selection criteria

This is the flagship, job-hunting portfolio — ruthlessly selective, not a
photo dump. A photo earns a place here on:

- **Photographic merit** — a decisive, unrepeatable moment (action, genuine
  expression, real tension) beats a merely pleasant or technically clean shot.
- **Composition & light** — deliberate framing, use of shadow/color/graphic
  structure; not just "in focus and well-exposed."
- **Range** — the gallery as a whole should show versatility (action,
  landscape, documentary/street, mood/atmosphere), not fifteen variations
  on one genre.
- **Order matters** — the strongest, most striking work leads the page for
  immediate impact; gentler/more common shots (however pleasant) sit
  further down.

People appear here freely (strangers, candid subjects), but never family, and
no photos of personal friends posed for the camera.

**Working on this repo as an agent? Read [AGENTS.md](AGENTS.md) first.** It is
the full brief and overrides anything out of date in this README.

## Files

```
site/
├── index.html        # The page (text, sections, image list)
├── styles.css        # All styling / colors / layout
├── app.js            # Lightbox (click-to-enlarge) + footer year
└── images/
    ├── large/        # Full-size web images (shown in the lightbox)
    └── thumbs/       # Smaller versions (shown in the gallery grid)
```

## Preview it locally

Double-click `index.html` to open it in your browser. That's it.

(If the fonts or lightbox ever act up when opened directly, run a tiny local server instead:
`cd site && python3 -m http.server` then visit `http://localhost:8000`.)

## How to add, remove, or reorder photos

1. **Optimize the new photo into two sizes.** From the `site` folder, run:
   ```bash
   sips -Z 2200 --setProperty formatOptions 82 /path/to/original.jpg --out images/large/my-photo.jpg
   sips -Z 1100 --setProperty formatOptions 80 /path/to/original.jpg --out images/thumbs/my-photo.jpg
   ```
   Use a short, lowercase, hyphenated name (e.g. `street-tram.jpg`).

2. **Add it to `index.html`.** Copy one `<figure class="shot">…</figure>` line inside the section you want, and change the two filenames + the `alt` description. To set the correct `width`/`height`, check the large image's size:
   ```bash
   sips -g pixelWidth -g pixelHeight images/large/my-photo.jpg
   ```

3. **Remove** a photo by deleting its `<figure>` line. **Reorder** by moving `<figure>` lines up or down.

## Change the title, sections, or contact email

- **Your name / title:** edit the `<title>`, `.brand`, and the hero `<h1>` in `index.html`.
- **Section names / descriptions:** edit the `.section-head` blocks.
- **Contact email:** edit the two `mert.ismk@gmail.com` references near the bottom of `index.html`.
- **Colors:** edit the variables at the top of `styles.css` (`--bg`, `--accent`, etc.).

## Publish it (free)

Both options host static sites for free.

### Option A — Netlify Drop (easiest, no account setup)
1. Go to https://app.netlify.com/drop
2. Drag the **`site`** folder onto the page.
3. You get a live URL instantly. (Create a free account to keep it and add a custom domain.)

### Option B — GitHub Pages
1. Create a GitHub repo and upload the contents of `site/` (so `index.html` is at the repo root).
2. Repo **Settings → Pages → Source: `main` branch, root**.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Custom domain (optional)
Buy a domain (e.g. `mertozdogan.com`) and point it at Netlify or GitHub Pages — both have a guided "Add custom domain" flow.

## Notes
- Your original full-resolution files are **not** in this folder — keep them backed up separately.
- The hero image and the lightbox use the `images/large/` versions; the grid uses `images/thumbs/` for fast loading.
