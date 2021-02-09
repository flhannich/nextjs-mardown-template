import React, { useEffect } from 'react';

const AccessibilityButton = ( { anchor } ) => {
  
  const handleKeyPress = () => {
    if (event.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleKeyPress);
    }
  }
  
  
  useEffect(() => {
    window.addEventListener('keydown', function() {
      handleKeyPress()
    });
  },[]);

  return (
    
    <div className="accessiblityButton">
     <a href={`#${anchor}`} className="skip-to-main">Zum Inhalt springen</a>
    </div>
    
  );
};

export default AccessibilityButton;
