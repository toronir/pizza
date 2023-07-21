import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 20vh;
  left: ${(props) => (props.width ? '50%' : '5%')};
  width: ${(props) => (props.width ? props.width : '90%')};
  ${(props) =>
    props.width &&
    `
  transform: translateX(-50%);
  `}
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose, width }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      {ReactDOM.createPortal(
        <ModalOverlayStyle width={width}>{children}</ModalOverlayStyle>,
        portalElement,
      )}
    </ModalBackdrop>
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
