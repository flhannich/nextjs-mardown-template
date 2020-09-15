import React, { useEffect } from 'react';
import * as utils from '@utils/helpers/lazyLoad'

export default function Image({ alt, src }) {

  useEffect(() => {
    utils.lazyLoad();
    window.addEventListener('scroll', utils.lazyLoad);
    window.addEventListener('resize', utils.lazyLoad);
  });

  return (

    <span className="image-container">

      <img
        data-src={src}
        alt={alt}
      />

    </span>

  );
};
