import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { nanoid } from 'nanoid';

export default function ImageGallery({ image, onImageClick }) {
  if (!Array.isArray(image) || image.length === 0) {
    return <p>No images.</p>;
  }

  return (
    <ul className={css.ImageGallery}>
      {image.map(img => (
        <ImageGalleryItem key={nanoid()} img={img} onClick={onImageClick} />
      ))}
    </ul>
  );
}
