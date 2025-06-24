import React from 'react';
import css from './Button.module.css';

function Modal({ onClick, children }) {
  return (
    <button className={css.Button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Modal;