function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animation');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".main-header-content__text-block-number, .main-header-content__textblock, .main-header__characteristics, .main-ram-pref__title-block, .main-ram-pref-column__text-wrap, .main-ram-pref-column__image, .power-graphic__content, .power__image, .power__text-block, .quality__background-image, .quality__column, .quality__title, .footer__first-string, .footer__second-string, .footer__title-block");
  for (let elm of elements) {
    observer.observe(elm);
  }