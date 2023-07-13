import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => {
  return <button onClick={onClose}>Close</button>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
