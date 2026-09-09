/* ============================================================
   FIELD PHOTOS — this is the only file you need to edit to add
   a photo to the gallery.

   1. Prepare the image (resizes it and strips GPS/EXIF):
        python3 tools/prep_photo.py ~/photo.jpg images/field/my-photo.jpg
   2. Add one { ... } block to PHOTOS below. Keep the commas.
   3. Commit and push. Done.

   Photo fields:
     src     — path to the image (required)
     alt     — short description, for screen readers (required)
     caption — the line shown on hover and in the lightbox
     where   — place and date, shown smaller under the caption
     group   — which section it belongs to; must match a name in
               GROUPS below, or it lands in a "More" section
     note    — optional longer line, shown ONLY in the lightbox,
               for when a photo needs more explanation

   To start a NEW collection (e.g. Colombia, Trinidad), add a line
   to GROUPS and use that name as the group on your photos. The
   order of GROUPS is the order the sections appear on the page.
   ============================================================ */

const GROUPS = [
  {
    name: "Ptarmigan — Lierne, Norway",
    blurb: "Dung sampling on the tundra at Lifjellet, twice a year, in March snow and June green."
  },
  {
    name: "Svalbard",
    blurb: "High-Arctic fieldwork with the Norwegian Polar Institute."
  },
  {
    name: "Off the clock",
    separate: true,
    blurb: "What I do when I'm not working."
  }
];

const PHOTOS = [

  /* ---------- Ptarmigan — Lierne, Norway ---------- */
  {
    src: "images/field/lierne-ridge-2025.jpg",
    alt: "View past the photographer's boots over spruce towards a snow-streaked ridge",
    caption: "A break on the way up",
    where: "Lierne, Norway · May 2025",
    group: "Ptarmigan — Lierne, Norway",
    w: 975, h: 1300
  },
  {
    src: "images/field/ptarmigan-sample-tube.jpg",
    alt: "A labelled Falcon tube lying open on moss, ready for a dung sample",
    caption: "One sample, tubed and labelled",
    where: "Lifjellet, Lierne · June 2025",
    note: "Every tube carries the sample code that follows it all the way to the sequencer.",
    group: "Ptarmigan — Lierne, Norway",
    w: 975, h: 1300
  },

  /* ---------- Svalbard ---------- */
  {
    src: "images/field/svalbard-sampling.jpg",
    alt: "A person in a survival suit kneeling on tundra, bagging a sample with gloved hands",
    caption: "Bagging a sample in a survival suit",
    where: "Svalbard · September 2026",
    group: "Svalbard",
    w: 975, h: 1300
  },
  {
    src: "images/field/svalbard-carcass.jpg",
    alt: "A bleached skeleton lying on Arctic tundra, research station visible in the distance",
    caption: "Life after death",
    where: "Svalbard · September 2026",
    note: "A carcass fertilises the ground it lies on — the vegetation around it grows richer and greener for years afterwards.",
    group: "Svalbard",
    w: 975, h: 1300
  },
  {
    src: "images/field/svalbard-rifle-station.jpg",
    alt: "Daniel in a high-visibility jacket carrying a rifle, with settlement buildings behind",
    caption: "Rifle and hi-vis — standard kit up here",
    where: "Svalbard · September 2026",
    group: "Svalbard",
    w: 975, h: 1300
  },

  /* ---------- Off the clock ---------- */
  {
    src: "images/field/ski-touring-loki.jpg",
    alt: "Daniel on touring skis crossing a snowfield, a husky running ahead on a line",
    caption: "Randonée with Loki",
    where: "March 2026",
    group: "Off the clock",
    w: 975, h: 1300
  },
  {
    src: "images/field/car-workshop.jpg",
    alt: "Daniel lying under a car in a garage, wheel off and tools laid out",
    caption: "The other kind of fieldwork",
    where: "May 2026",
    group: "Off the clock",
    w: 975, h: 1300
  }
];
