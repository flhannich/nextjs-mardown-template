import React, { useEffect } from 'react';

const Accessibility = ( { anchor } ) => {
  
  const handleKeyPress = event => {
    if (event.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleKeyPress);
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', function() {
      handleKeyPress
    });
  },[]);

  return (

    <a href={`#${anchor}`} className="skip-to-main">Zum Inhalt springen</a>

  );
};

export default Accessibility;
