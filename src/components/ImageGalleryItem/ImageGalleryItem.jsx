import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ img, onClick }) {
  if (!img) return null;
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={img.webformatURL}
        alt={img.tags || 'Image'}
        className={css.ImageGalleryItem_image}
        onClick={() => onClick(img.largeImageURL)}
      />
    </li>
  );
}
