import React from 'react';

const Image = ({ placeholder, src, srcset, alt }) => {
  
  return (

    <span 
      className="image-holder"
    >

      <img
        src={placeholder}
        data-src={src}
        data-srcset={srcset}
        alt={alt}
        className="lazy-load"
      />

    </span>

  );
};

export default Image;
