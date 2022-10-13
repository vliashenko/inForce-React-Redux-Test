import { createPortal } from 'react-dom';
import styles from './ModalWindow.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ children, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.button__close} onClick={handleClick}>
          &times;
        </button>

        {children}
      </div>
    </div>,
    modalRoot
  );
};

ModalWindow.proptypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWindow;
