import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);    
    document.documentElement.style.overflow = 'hidden';// Забороняє прокрутку
    document.body.style.setProperty('overflow', 'hidden', 'important');// Забороняє прокрутку
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);    
    document.documentElement.style.overflow = '';// Повертає прокрутку
    document.body.style.overflow = '';// Повертає прокрутку
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          {this.props.children}
          <button
            className={css.CloseButton}
            onClick={this.handleBackdropClick}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
