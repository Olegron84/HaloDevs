function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animation');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".main-header-content__text-block-number, .main-header-content__textblock, .main-header__characteristics, .main-ram-pref__title-block, .main-ram-pref-column__text-wrap, .main-ram-pref-column__image");
  for (let elm of elements) {
    observer.observe(elm);
  }