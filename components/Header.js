import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  
  const node = useRef();
  
  const [location, setLocation] = useState('')
  
  let lastScroll = 0;
  
  
  useEffect(() => {
    
    setLocation(window.location.pathname.split('/')[1])
    getScrollState();
    
  }, []);
  
  
  const getScrollState = () => {
    let tick = false;

    document.addEventListener('scroll', function(e) {
      if (!tick) {
        window.requestAnimationFrame(function() {
          setScrollState ()
          tick = false;
        });
        tick = true;
      }
    });
  }
  
  
  const setScrollState = () => {
    
    let header = node.current;
    
    let classScrollsTop = 'is-scrolling--up';
    let classScrollsDown = 'is-scrolling';
    
    let offset = 100;

    if(header !== null) {

      let scrollY = window.pageYOffset || document.documentElement.scrollTop;

      (scrollY <= Math.max(lastScroll, 0))

        ? header.classList.add(classScrollsTop)
        : header.classList.remove(classScrollsTop);

      (window.pageYOffset > offset)

        ? header.classList.add(classScrollsDown)
        : header.classList.remove(classScrollsDown, classScrollsTop);

      lastScroll = scrollY;
      
    }

  }
  
  
  return (
    <>

      <header 
        ref={node}
        className="">

        <div className="container">

          <nav className="nav" role="navigation" aria-label="main navigation">

            <Link href="/" >
              <a className={location == '' ? 'is-active' : ''}>Home</a>
            </Link>

            <Link href="/about" >
              <a className={location == 'about' ? 'is-active' : ''}>About</a>
            </Link>
            
            <Link href="/blog">
              <a className={location == 'blog' ? 'is-active' : ''}>Blog</a>
            </Link>

            <Link href="/contact">
              <a className={location == 'contact' ? 'is-active' : ''}>Contact</a>
            </Link>

          </nav>

        </div>
        
      </header>
    </>
  )
}

export default Header;