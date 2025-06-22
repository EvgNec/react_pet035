import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ image }) {
  if (!Array.isArray(image) || image.length === 0) {
    return <p>No images found.</p>;
  }
  return (
    <ul className="ImageGallery">
      {image.map(img => (
        <ImageGalleryItem key={img.id} img={img} />
      ))}
    </ul>
  );
}
