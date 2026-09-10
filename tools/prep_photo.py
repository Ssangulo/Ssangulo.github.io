#!/usr/bin/env python3
"""
Prepare a photo for the website.

Resizes to a sensible web size, fixes phone rotation, and strips ALL metadata
(including GPS coordinates — these photos are published publicly).

Usage:
    python3 tools/prep_photo.py SOURCE.jpg images/field/output-name.jpg
    python3 tools/prep_photo.py --square SOURCE.jpg images/site/portrait.jpg

Requires Pillow:  pip install --user Pillow
"""

import argparse
import os
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run: pip install --user Pillow")

MAX_EDGE = 1300      # long edge in pixels; ample for the grid and the lightbox
QUALITY = 80         # JPEG quality; 80 is visually clean, and resolution matters more than quality here


def prep(src, dst, max_edge=MAX_EDGE, quality=QUALITY, square=False):
    before = os.path.getsize(src)

    im = Image.open(src)
    # Phone photos record rotation in EXIF rather than in the pixels. Apply it
    # here, because we are about to throw the EXIF away.
    im = ImageOps.exif_transpose(im)
    im = im.convert("RGB")

    w, h = im.size
    if square:
        # Centre-crop to a square, for the portrait slot on the home page.
        edge = min(max_edge, min(w, h))
        im = ImageOps.fit(im, (edge, edge), Image.LANCZOS, centering=(0.5, 0.5))
    elif max(w, h) > max_edge:
        scale = max_edge / max(w, h)
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

    os.makedirs(os.path.dirname(dst) or ".", exist_ok=True)
    # No exif= argument, so nothing is carried over: no GPS, no device, no timestamp.
    im.save(dst, "JPEG", quality=quality, optimize=True, progressive=True)

    after = os.path.getsize(dst)
    print(f"{os.path.basename(src):<40} {w}x{h} {before/1e6:>5.1f}MB"
          f"  ->  {im.size[0]}x{im.size[1]} {after/1e3:>5.0f}KB")

    # Print a ready-to-paste entry. w/h matter: without them the browser
    # reserves no space for a lazy-loaded image, so the page jumps as photos
    # arrive and the masonry columns re-balance.
    print(f"""
Paste into the PHOTOS list in assets/photos.js:

  {{
    src: "{dst}",
    alt: "",
    caption: "",
    where: "",
    group: "",
    w: {im.size[0]}, h: {im.size[1]}
  }},
""")
    return after


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("source")
    ap.add_argument("dest")
    ap.add_argument("--max", type=int, default=MAX_EDGE, help=f"long edge, default {MAX_EDGE}")
    ap.add_argument("--quality", type=int, default=QUALITY, help=f"JPEG quality, default {QUALITY}")
    ap.add_argument("--square", action="store_true",
                    help="centre-crop to a square (for the home-page portrait)")
    a = ap.parse_args()
    prep(a.source, a.dest, a.max, a.quality, a.square)
