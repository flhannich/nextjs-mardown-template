
export function lazyLoad(){

  var elem, className, time

  elem = document.querySelectorAll('[data-src]');

  var enteredScreenClassName = 'has-entered'
  var lazyClassName = 'is-lazy';
  var loadedClassName = 'has-loaded';
  var pause = 10;

    var initialTimer;


    if (initialTimer) {
      clearTimeout(initialTimer);
    }

    initialTimer = setTimeout(function() {

      var scrollPos = window.pageYOffset;
      var windowHeight = window.innerHeight;

      elem.forEach((item, i) => {

        var itemPos =  scrollPos + item.getBoundingClientRect().top;

        item.parentNode.classList.add(lazyClassName);

        if(itemPos < scrollPos + (windowHeight / 1.22)) {

          item.parentNode.classList.add(enteredScreenClassName);

        }

        if(itemPos < scrollPos + (windowHeight * 2) && item.dataset.src !== undefined) {

            item.setAttribute('src', item.dataset.src);
            item.removeAttribute('data-src');

            if(item.dataset.srcset) {

              item.setAttribute('srcset', item.dataset.srcset);
              item.removeAttribute('data-srcset');

            }


            item.onload = function() {
              item.parentNode.classList.add(loadedClassName);
            }

        }


      })

    }, pause);


}
