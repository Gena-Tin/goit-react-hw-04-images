import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ alt, src, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', checkEvent);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', checkEvent);
    };
  });

  const checkEvent = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      toggleModal({ status: false });
    }
  };

  return (
    <div className={css.overlay} onClick={checkEvent}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;