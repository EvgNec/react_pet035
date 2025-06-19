import React from 'react';

export default function ImageGalleryItem({ image }) {

    console.log('img prop:', image); 
  if (!image) return null;

  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags || 'Image'}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}