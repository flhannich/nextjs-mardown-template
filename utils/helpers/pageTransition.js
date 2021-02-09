export default function pageTransition() {

  var body = document.querySelector('body');

  var timerIn = 500;
  var timerOut = 500;

    window.addEventListener('pageshow', function(event) {
      if (event.persisted) {
        pagetransitionOutReset(body);
        pageTransitionIn(body, timerIn);
      }
    });

    setTimeout( function() {

      pageTransitionIn(body, timerIn);

    }, 200);

    var host = location.hostname;
    var links = document.querySelectorAll('[href]')

    links.forEach((item, i) => {

      if(item.href.includes('#')) {
        return;
      }

      if(item.hostname == host) {

        item.addEventListener("click", function() {

          pageTransitionOut(event, timerOut, body)

        });
      }
    });
  }

  function pageTransitionIn(body, timer) {

    body.classList.add('is-entering');

    setTimeout(function() {

      body.classList.add('has-entered');
      body.classList.remove('is-entering');

    },timer);

  }

  function pageTransitionOut(e, timer, body) {

    e.preventDefault();

    body.classList.add('is-leaving');
    body.classList.remove('has-entered');

    setTimeout(function() {

      body.classList.add('has-left');

      window.location = e.srcElement.href;

    },timer);

  }

  function pagetransitionOutReset(body) {

    body.classList.remove('is-leaving', 'has-left');

  }
