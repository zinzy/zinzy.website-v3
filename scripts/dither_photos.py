#!/usr/bin/env python3
"""
Dithers the most recently-published photos into static/img/photos/dithers/.

Selection mirrors the front page: it reads `date` and `photo` out of each
content/photos/*.md entry's front matter and dithers the N most recent.
This is deliberately not based on filesystem mtimes -- a fresh git
checkout (e.g. on Netlify) stamps every file with the checkout time, so
mtime order has no relation to actual publish order there.

Based on Roel Roscam Abbing's dithering script for Low-tech Magazine
(AGPLv3, https://www.gnu.org/licenses/agpl-3.0.html).
"""

import argparse
import logging
import os
from datetime import datetime

import hitherdither
from PIL import Image

BLACK_AND_WHITE_PALETTE = hitherdither.palette.Palette([(0, 0, 0), (255, 255, 255)])
THRESHOLD = [72, 72, 72]
THUMBNAIL_SIZE = (1200, 1200)
DISPLAY_WIDTH = 1000


def dither_image(source_path, output_path):
    img = Image.open(source_path).convert("RGB")
    img.thumbnail(THUMBNAIL_SIZE, Image.LANCZOS)
    dithered = hitherdither.ordered.bayer.bayer_dithering(img, BLACK_AND_WHITE_PALETTE, THRESHOLD, order=8)
    display_height = round(dithered.height * DISPLAY_WIDTH / dithered.width)
    dithered = dithered.resize((DISPLAY_WIDTH, display_height), Image.Resampling.NEAREST)
    dithered.save(output_path, optimize=True)


def most_recent_photos(content_dir, limit):
    entries = []
    for fname in os.listdir(content_dir):
        if not fname.endswith(".md") or fname.startswith("_"):
            continue
        date, photo = None, None
        with open(os.path.join(content_dir, fname)) as f:
            for line in f:
                line = line.strip()
                if line.startswith("date:"):
                    date = datetime.fromisoformat(line.split(":", 1)[1].strip())
                elif line.startswith("- url:"):
                    photo = line.split(":", 1)[1].strip().strip("\"'")
        if date and photo:
            entries.append((date, os.path.basename(photo)))

    entries.sort(key=lambda e: e[0], reverse=True)
    filenames = [fname for _, fname in entries]
    return filenames[:limit] if limit else filenames


def main():
    parser = argparse.ArgumentParser(description="Dither the most recently-published photos into static/img/photos/dithers/")
    parser.add_argument("-d", "--directory", default="static/img/photos", help="Folder of source photos")
    parser.add_argument("-c", "--content-directory", default="content/photos", help="Folder of photo content pages, used to determine publish order")
    parser.add_argument("-n", "--limit", type=int, default=5, help="Only dither the N most recently published photos")
    parser.add_argument("-f", "--force", action="store_true", help="Re-dither even if an output already exists")
    parser.add_argument("-v", "--verbose", action="store_true")
    args = parser.parse_args()

    logging.basicConfig(level=logging.DEBUG if args.verbose else logging.INFO, format="%(message)s")
    if not args.verbose:
        logging.getLogger("PIL").setLevel(logging.WARNING)

    photos_dir = os.path.abspath(args.directory)
    dithers_dir = os.path.join(photos_dir, "dithers")
    os.makedirs(dithers_dir, exist_ok=True)

    for fname in most_recent_photos(args.content_directory, args.limit):
        source_path = os.path.join(photos_dir, fname)
        if not os.path.isfile(source_path):
            logging.warning("referenced photo not found, skipping: %s", fname)
            continue

        name, _ = os.path.splitext(fname)
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
