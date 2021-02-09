import { useRef, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  
  const node = useRef();

  
  let tick = false;
  let lastScroll = 0;
  
  let classScrollsTop = 'is-scrolling--up';
  let classScrollsDown = 'is-scrolling';
  
  let offset = 100;

  
  useEffect(() => {

    document.addEventListener('scroll', function(e) {
      if (!tick) {
        window.requestAnimationFrame(function() {
          setState ()
          tick = false;
        });
        tick = true;
      }
    });
    
  }, []);
  

  const setState = () => {
    
    let header = node.current;
    
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;

    (scrollY <= Math.max(lastScroll, 0))

      ? header.classList.add(classScrollsTop)
      : header.classList.remove(classScrollsTop);

    (window.pageYOffset > offset)

      ? header.classList.add(classScrollsDown)
      : header.classList.remove(classScrollsDown, classScrollsTop);

    lastScroll = scrollY;

  }
  
  
  return (
    <>

      <header 
        ref={node}
        className="">

        <div className="container">

          <nav className="nav" role="navigation" aria-label="main navigation">

            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/about">
              <a>About</a>
            </Link>

            <Link href="/contact">
              <a>Contact</a>
            </Link>

          </nav>

        </div>
        
      </header>
    </>
  )
}

export default Header;