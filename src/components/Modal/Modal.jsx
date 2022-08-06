import css from './Modal.module.css';
import React from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({onCloseModal, largeImageURL, tag}) => {

useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
});

const handleKeyDown = event => {
if (event.code === 'Escape') {
    onCloseModal();
}
};

  const clickBackDrop = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
    return (
        <div className={css.modalBackdrop} onClick={clickBackDrop}>
            <div className={css.modalContent}>
                <img width={800} src={ largeImageURL } alt={tag} />
            </div>
        </div>
    )
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal