// Highlight the nav link for the section currently in view.
(function () {
  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!('IntersectionObserver' in window) || links.length === 0) {
    return;
  }

  var byId = {};
  links.forEach(function (link) {
    byId[link.getAttribute('href').slice(1)] = link;
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      links.forEach(function (link) {
        link.removeAttribute('aria-current');
      });
      var active = byId[entry.target.id];
      if (active) {
        active.setAttribute('aria-current', 'true');
        if (active.scrollIntoView && window.matchMedia('(max-width: 960px)').matches) {
          active.scrollIntoView({ block: 'nearest', inline: 'center' });
        }
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });
})();
