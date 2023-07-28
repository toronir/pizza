import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalOverlayStyle } from './Modal.style';

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose, width = null }) => {
  return (
    <>
      <ModalBackdrop onClick={onClose} />
      {ReactDOM.createPortal(
        <ModalOverlayStyle width={width}>{children}</ModalOverlayStyle>,
        portalElement,
      )}
    </>
  );
};

Modal.defaultProps = {
  width: null,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.string,
};

ModalOverlayStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

ModalBackdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
