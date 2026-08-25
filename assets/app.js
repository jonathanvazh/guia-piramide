(function () {
  'use strict';

  // --- menú de contenido en móvil
  var toggle = document.querySelector('.navtoggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // al elegir una sección en móvil, cerrar el menú
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && window.matchMedia('(max-width: 880px)').matches) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- sección activa según la posición de lectura
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__list a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var headings = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  var current = null;
  function setActive(a) {
    if (a === current) return;
    if (current) current.classList.remove('is-active');
    if (a) a.classList.add('is-active');
    current = a;
  }

  var seen = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { seen[entry.target.id] = entry.isIntersecting; });

    // la primera sección visible en orden de documento manda
    for (var i = 0; i < headings.length; i++) {
      if (seen[headings[i].id]) { setActive(byId[headings[i].id]); return; }
    }
    // si ninguna encabezado está en pantalla, conservar la última pasada
    for (var j = headings.length - 1; j >= 0; j--) {
      if (headings[j].getBoundingClientRect().top < 0) { setActive(byId[headings[j].id]); return; }
    }
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });
})();
