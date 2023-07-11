import ReactDOM from 'react-dom';

function Backdrop({ onClose }) {
  return <button onClick={onClose}>Close</button>;
}

function ModalOverlay({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
