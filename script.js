(function () {
  const logoSizeStyle = document.createElement('style');
  logoSizeStyle.textContent = `
    .brand {
      min-height: 58px;
      padding-left: 70px;
    }
    .brand::before {
      width: 58px;
      height: 58px;
      background-size: 145%;
    }
    @media (max-width: 760px) {
      .brand {
        padding-left: 50px;
        min-height: 42px;
      }
      .brand::before {
        width: 42px;
        height: 42px;
      }
    }
  `;
  document.head.appendChild(logoSizeStyle);

  const favicon = document.querySelector('link[rel~="icon"]');
  if (favicon) {
    favicon.href = 'assets/favicon.svg?v=20260910b';
    favicon.type = 'image/svg+xml';
  }

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    const closeNav = () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-topic]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      items.forEach((item) => {
        const topics = (item.getAttribute('data-topic') || '').split(' ');
        item.hidden = filter !== 'all' && !topics.includes(filter);
      });
    });
  });
})();
