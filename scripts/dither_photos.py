#!/usr/bin/env python3
"""
Dithers photos from static/img/photos into static/img/photos/dithers/.

Based on Roel Roscam Abbing's dithering script for Low-tech Magazine
(AGPLv3, https://www.gnu.org/licenses/agpl-3.0.html), trimmed to a flat
photo folder with a single grayscale palette (no per-post categories).
"""

import argparse
import logging
import os

import hitherdither
from PIL import Image

IMAGE_EXT = (".jpg", ".jpeg", ".png", ".gif", ".webp", ".tiff", ".bmp")

GRAYSCALE_PALETTE = hitherdither.palette.Palette(
    [(25, 25, 25), (75, 75, 75), (125, 125, 125), (175, 175, 175), (225, 225, 225), (250, 250, 250)]
)
THRESHOLD = [96, 96, 96]
THUMBNAIL_SIZE = (800, 800)


def dither_image(source_path, output_path):
    img = Image.open(source_path).convert("RGB")
    img.thumbnail(THUMBNAIL_SIZE, Image.LANCZOS)
    dithered = hitherdither.ordered.bayer.bayer_dithering(img, GRAYSCALE_PALETTE, THRESHOLD, order=8)
    dithered.save(output_path, optimize=True)


def main():
    parser = argparse.ArgumentParser(description="Dither photos into static/img/photos/dithers/")
    parser.add_argument("-d", "--directory", default="static/img/photos", help="Folder of source photos")
    parser.add_argument("-n", "--limit", type=int, default=None, help="Only consider the N most recent photos (by filename)")
    parser.add_argument("-f", "--force", action="store_true", help="Re-dither even if an output already exists")
    parser.add_argument("-v", "--verbose", action="store_true")
    args = parser.parse_args()

    logging.basicConfig(level=logging.DEBUG if args.verbose else logging.INFO, format="%(message)s")
    if not args.verbose:
        logging.getLogger("PIL").setLevel(logging.WARNING)

    photos_dir = os.path.abspath(args.directory)
    dithers_dir = os.path.join(photos_dir, "dithers")
    os.makedirs(dithers_dir, exist_ok=True)

    photos = [
        f for f in os.listdir(photos_dir)
        if os.path.isfile(os.path.join(photos_dir, f)) and f.lower().endswith(IMAGE_EXT)
    ]
    photos.sort(key=lambda f: os.path.getmtime(os.path.join(photos_dir, f)))

    if args.limit:
        photos = photos[-args.limit:]

    for fname in photos:
        name, _ = os.path.splitext(fname)
        source_path = os.path.join(photos_dir, fname)
        output_path = os.path.join(dithers_dir, name + "_dithered.png")

        if os.path.exists(output_path) and not args.force:
            logging.debug("skip (already dithered): %s", fname)
            continue

        try:
            dither_image(source_path, output_path)
            logging.info("dithered: %s -> dithers/%s", fname, os.path.basename(output_path))
        except Exception as e:
            logging.error("failed on %s: %s", fname, e)


if __name__ == "__main__":
    main()
