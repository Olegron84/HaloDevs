function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animation');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".main-header-content__text-block-number, .main-header-content__textblock, .main-header__characteristics");
  for (let elm of elements) {
    observer.observe(elm);
  }