
const lazyLoad = () => {
    
    let callback = function (entries, observer) {
  
      entries.forEach (function (entry) {
  
      if (entry.isIntersecting) {
  
          let image = entry.target;

          image.setAttribute('src', image.dataset.src);
          image.removeAttribute('data-src');
          
          if(image.dataset.srcset) {
          
            image.setAttribute('srcset', image.dataset.srcset);
            image.removeAttribute('data-srcset');
          
          }
          
          image.classList.add('has-loaded');
          observer.unobserve(image);
        }
      })
    }
  
    let images = document.querySelectorAll('[data-src]');
  
    let options = {
      root: null,
      rootMargin: '0px 0px 50% 0px',
      threshold: 0
    }
  
    let observer = new IntersectionObserver( callback, options);
  
    images.forEach(function(image) {
  
    observer.observe(image);
  
    });

}

export default lazyLoad;