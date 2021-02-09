const scrollTrigger = selector => {

  let targets = document.querySelectorAll(selector);
  let className = 'in-view';

  let callback = function (entries, observer) {

    entries.forEach (function (entry) {

  		if (entry.isIntersecting) {

        let item = entry.target;

        if (!item.classList.contains(className)) {
          item.classList.add(className)
        }

        observer.unobserve(item);
      }
    })
  }

  let options = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  }

  let observer = new IntersectionObserver( callback, options);

  targets.forEach(function(item) {

  	observer.observe(item);

  });
}

export default scrollTrigger;