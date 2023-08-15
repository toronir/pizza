import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalOverlayStyle } from './Modal.style';

const portalElement = document.getElementById('overlays');

const Modal = ({ children, width = null }) => {
  return (
    <>
      <ModalBackdrop />
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
  width: PropTypes.string,
};

ModalOverlayStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
