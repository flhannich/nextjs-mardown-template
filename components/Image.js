import React, { useRef, useEffect } from 'react';

const Image = ({ placeholder, src, srcset, alt }) => {
  
  const node = useRef();
  
  useEffect(() => {

    let callback = function (entries, observer) {
  
      entries.forEach (function (entry) {
  
      if (entry.isIntersecting) {
  
          let image = entry.target;
                    
          if(image.dataset.src !== undefined) {

            let src = image.dataset.src;
            
            let path = src.substr(0, image.dataset.src.lastIndexOf('/'));
            let mime = src.split('.').pop();
            let filename = src.split('/').pop().split('.')[0];
          
            image.setAttribute('src', image.dataset.src);
            image.removeAttribute('data-src');
            
            image.setAttribute('srcset', 
              path + '/' + filename + '@0.3' + '.' + mime  + ' 780w,' +
              path + '/' + filename + '@0.6' + '.' + mime  + ' 1280w,' +
              path + '/' + filename + '@1' + '.' + mime  + ' 1680w'
            );
            
          }
         
          // if(image.dataset.srcset) {
            
            // image.setAttribute('srcset', image.dataset.srcset);
            // image.removeAttribute('data-srcset');
          
          // }
          
          node.current.classList.add('has-loaded');
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
  
    // window.addEventListener('scroll', utils.lazyLoad);
    // window.addEventListener('resize', utils.lazyLoad);
  });
  


  return (

    <span 
      className="image-holder"
      ref={node}
    >

      <img
        src={placeholder}
        data-src={src}
        data-srcset={srcset}
        alt={alt}
      />

    </span>

  );
};

export default Image;
