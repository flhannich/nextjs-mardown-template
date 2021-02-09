
const lazyLoad = () => {
      
    let callback = function (entries, observer) {
  
      entries.forEach (function (entry) {

      if (entry.isIntersecting) {

          let target = entry.target;
          
          if(target.tagName === 'VIDEO') {
            let source = target.querySelectorAll('source');
            source.forEach(function (item) {
              item.setAttribute('src', item.dataset.src);
              item.removeAttribute('data-src');
            })
          }
          
  
          if(target.dataset.src !== undefined) {
              
            let src = target.dataset.src;
            let mime = src.split('.').pop();
            
            target.setAttribute('src', target.dataset.src);
            target.removeAttribute('data-src');
            
            
            if(mime === 'jpg' || mime === 'png') {
              
              let path = src.substr(0, src.lastIndexOf('/'));
              let filename = src.split('/').pop().split('.')[0];

              target.setAttribute('srcset', 
                path + '/' + filename + '@0.3' + '.' + mime  + ' 780w,' +
                path + '/' + filename + '@0.6' + '.' + mime  + ' 1280w,' +
                path + '/' + filename + '@1' + '.' + mime  + ' 1680w'
              );
              
            }
   
          }
          target.classList.add('has-loaded');

          // if(target.dataset.srcset) {
            
            // target.setAttribute('srcset', target.dataset.srcset);
            // target.removeAttribute('data-srcset');
          
          // }
          
          observer.unobserve(target);
        }
      })
    }
  
    let elements = document.querySelectorAll('.lazy-load');
    
    let options = {
      root: null,
      rootMargin: '0px 0px 50% 0px',
      threshold: 0
    }
  
    let observer = new IntersectionObserver( callback, options);
  
    elements.forEach(function(el) {
  
     observer.observe(el);
  
    });
    
  }
  

export default lazyLoad;