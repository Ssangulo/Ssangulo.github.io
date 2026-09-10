/* Builds the grouped photo sections from GROUPS + PHOTOS (assets/photos.js)
   and runs the lightbox. You should not need to edit this file to add a
   photo or start a new group — do both in photos.js. */
(function () {
  var mount = document.getElementById('gallery');
  if (!mount || typeof PHOTOS === 'undefined') return;

  var groups = (typeof GROUPS !== 'undefined') ? GROUPS : [];

  // Bucket the photos by group, in the order GROUPS declares.
  var buckets = groups.map(function (g) { return { def: g, items: [] }; });
  var byName = {};
  buckets.forEach(function (b) { byName[b.def.name] = b; });

  // Anything whose group doesn't match a declared name still gets shown,
  // in a trailing bucket — a typo should never silently hide a photo.
  var orphans = { def: { name: 'More' }, items: [] };

  PHOTOS.forEach(function (p, i) {
    p._index = i;                       // lightbox order == source order
    (byName[p.group] || orphans).items.push(p);
  });
  if (orphans.items.length) buckets.push(orphans);

  buckets.forEach(function (b) {
    if (!b.items.length) return;        // an empty group renders nothing

    var sec = document.createElement('section');
    sec.className = 'gallery-section' + (b.def.separate ? ' separate' : '');

    var h = document.createElement('h2');
    h.className = 'group-title';
    h.textContent = b.def.name;
    sec.appendChild(h);

    if (b.def.blurb) {
      var blurb = document.createElement('p');
      blurb.className = 'group-blurb';
      blurb.innerHTML = b.def.blurb;   // blurbs may contain links/emphasis
      sec.appendChild(blurb);
    }

    var grid = document.createElement('div');
    grid.className = 'gallery';
    b.items.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.className = 'shot';
      fig.tabIndex = 0;
      fig.dataset.index = p._index;
      // width/height let the browser reserve the right box before the image
      // loads, so nothing jumps and the columns balance correctly first time.
      var dims = (p.w && p.h) ? ' width="' + p.w + '" height="' + p.h + '"' : '';
      fig.innerHTML =
        '<img src="' + p.src + '" alt="' + (p.alt || '') + '"' + dims + ' loading="lazy">' +
        '<figcaption>' + (p.caption || '') +
        (p.where ? '<span class="where">' + p.where + '</span>' : '') +
        '</figcaption>';
      grid.appendChild(fig);
    });
    sec.appendChild(grid);
    mount.appendChild(sec);
  });

  /* ---------------- lightbox ---------------- */

  var box = document.getElementById('lightbox');
  var boxImg = box.querySelector('img');
  var boxCap = box.querySelector('.lb-caption');
  var current = 0;

  function show(i) {
    current = (i + PHOTOS.length) % PHOTOS.length;
    var p = PHOTOS[current];
    boxImg.src = p.src;
    boxImg.alt = p.alt || '';
    boxCap.innerHTML =
      (p.caption || '') +
      (p.note ? '<span class="lb-note">' + p.note + '</span>' : '') +
      (p.where ? '<span>' + p.where + '</span>' : '');
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  mount.addEventListener('click', function (e) {
    var fig = e.target.closest('.shot');
    if (fig) show(+fig.dataset.index);
  });
  mount.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var fig = e.target.closest('.shot');
    if (fig) { e.preventDefault(); show(+fig.dataset.index); }
  });

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  box.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
