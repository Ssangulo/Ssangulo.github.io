/* Builds the photo grid from PHOTOS (assets/photos.js) and runs the
   lightbox. You should not need to edit this file to add photos. */
(function () {
  var grid = document.getElementById('gallery');
  if (!grid || typeof PHOTOS === 'undefined') return;

  PHOTOS.forEach(function (p, i) {
    var fig = document.createElement('figure');
    fig.className = 'shot';
    fig.tabIndex = 0;
    fig.dataset.index = i;
    fig.innerHTML =
      '<img src="' + p.src + '" alt="' + (p.alt || '') + '" loading="lazy">' +
      '<figcaption>' + (p.caption || '') +
      (p.where ? '<span class="where">' + p.where + '</span>' : '') +
      '</figcaption>';
    grid.appendChild(fig);
  });

  var box = document.getElementById('lightbox');
  var boxImg = box.querySelector('img');
  var boxCap = box.querySelector('.lb-caption');
  var current = 0;

  function show(i) {
    current = (i + PHOTOS.length) % PHOTOS.length;
    var p = PHOTOS[current];
    boxImg.src = p.src;
    boxImg.alt = p.alt || '';
    boxCap.innerHTML = (p.caption || '') + (p.where ? '<span>' + p.where + '</span>' : '');
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', function (e) {
    var fig = e.target.closest('.shot');
    if (fig) show(+fig.dataset.index);
  });
  grid.addEventListener('keydown', function (e) {
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
