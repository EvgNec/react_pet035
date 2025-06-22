import React from 'react';

export default function ImageGalleryItem({ img }) {
  if (!img) return null;
  return (
    <li className="ImageGalleryItem">
      <img
        src={img.webformatURL}
        alt={img.tags || 'Image'}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
