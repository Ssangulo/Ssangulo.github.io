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
    blurb: "Ptarmigan dung sampling on the tundra at Lifjellet, twice a year, in March snow and June green."
  },
  {
    name: "Svalbard",
    blurb: "High-Arctic fieldwork following the migrating Pink footed goose."
  },
  {
    name: "Finnmark — Permafrost",
    blurb: "BSc fieldwork at Iskoras, measuring how fast carbon breaks down once permafrost thaws."
  },
  {
    name: "Páramo — Colombia",
    blurb: "Root sampling on the Andean pàramos."
  },
  {
    name: "Trinidad",
    blurb: "Field and lab assistant for 3 months on <a href=\"https://theguppyproject.weebly.com/\">The Guppy Project</a> \u2014 David Reznick, Joe Travis, Ron Bassar and Tim Coulson\u2019s long-running study of how ecology and evolution feed back on each other in Trinidad\u2019s mountain streams. Hired hands in the field and the lab."
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
    group: "Ptarmigan — Lierne, Norway",
    w: 975, h: 1300
  },

  /* ---------- Svalbard ---------- */
  {
    src: "images/field/svalbard-sampling.jpg",
    alt: "A person in a survival suit kneeling on tundra, bagging a sample with gloved hands",
    caption: "Bagging a sample",
    where: "Svalbard · September 2026",
    group: "Svalbard",
    w: 975, h: 1300
  },
  {
    src: "images/field/svalbard-carcass.jpg",
    alt: "A bleached skeleton lying on Arctic tundra, research station visible in the distance",
    caption: "Life after death",
    where: "Svalbard · September 2026",
    note: "A carcass fertilises the ground it lies on, and the vegetation around it grows richer and greener for years afterwards.",
    group: "Svalbard",
    w: 975, h: 1300
  },
  {
    src: "images/field/svalbard-rifle-station.jpg",
    alt: "Daniel in a high-visibility jacket carrying a rifle",
    caption: "Rifle and flotation suit — standard kit up here",
    where: "Svalbard · September 2026",
    group: "Svalbard",
    w: 975, h: 1300
  },

  /* ---------- Finnmark — Permafrost ---------- */
  {
    src: "images/field/iskoras-tundra-mast.jpg",
    alt: "Daniel standing on tundra beside a solar-powered monitoring mast at the Iskoras field site",
    caption: "The monitoring site at Iskoras",
    where: "Iskoras, Finnmark, Norway",
    note: "Over a hundred tea bags went into the ground across the thaw gradient here, as a standardised measure of decomposition.",
    group: "Finnmark — Permafrost",
    w: 975, h: 1300
  },

  /* ---------- Páramo — Colombia ---------- */
  {
    src: "images/field/paramo-belmira-root-sampling.jpg",
    alt: "Two researchers bagging root samples among frailejones in páramo fog",
    caption: "Sampling <em>Gaultheria myrsinoides</em> roots at 3,100 m",
    where: "Páramo de Belmira, Colombia",
    group: "Páramo — Colombia",
    w: 1300, h: 975
  },
  {
    src: "images/field/paramo-frailejones-fog.jpg",
    alt: "Frailejones in flower emerging from thick fog on the páramo",
    caption: "Frailejones in the fog",
    where: "Páramo, Colombian Andes",
    note: "Frailejones (Espeletia) are the signature plants of the páramo — the world's coldest biodiversity hotspot.",
    group: "Páramo — Colombia",
    w: 975, h: 1300
  },
  {
    src: "images/field/colombia-carrying-gear.jpg",
    alt: "A person carrying a cool box and sample bags up a steep muddy forest trail",
    caption: "Carrying the cool box up to the site",
    where: "La Nevera, Colombia",
    group: "Páramo — Colombia",
    w: 975, h: 1300
  },
  {
    src: "images/field/paramo-tarn.jpg",
    alt: "A small lake below a cloud-covered ridge, frailejones in the foreground",
    caption: "A tarn below the ridge",
    where: "Páramo, Colombian Andes",
    group: "Páramo — Colombia",
    w: 975, h: 1300
  },

  /* ---------- Trinidad ---------- */
  {
    src: "images/field/trinidad-stream-sampling.jpg",
    alt: "Three researchers standing in a shallow forest stream with sampling buckets and nets",
    caption: "Working a stream reach",
    where: "Trinidad",
    note: "Mark\u2013recapture on wild guppy populations: fish are caught, measured, marked and returned.",
    group: "Trinidad",
    w: 1080, h: 1067
  },
  {
    src: "images/field/trinidad-truck.jpg",
    alt: "A pickup truck parked at the end of an overgrown forest track",
    caption: "The end of the drivable track",
    where: "Trinidad",
    group: "Trinidad",
    w: 975, h: 1300
  },
  {
    src: "images/field/trinidad-forest.jpg",
    alt: "Tall trees and dense understorey inside Trinidadian rainforest",
    caption: "Inside the forest",
    where: "Trinidad",
    group: "Trinidad",
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
