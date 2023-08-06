import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import closeIcon from '../../assets/img/icons/close.svg';
import checkIcon from '../../assets/img/icons/check.svg';
import CartModalStyled from './CartModal.style';

const CartModal = ({ onClose, item }) => {
  const { name, quantity } = item;
  return (
    <Modal width="60rem" onClose={onClose}>
      <CartModalStyled>
        <header>
          <h2>Added to cart</h2>
          <button onClose={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </header>
        <p>
          <img src={checkIcon} alt="status ok" aria-hidden="true" />
          {quantity} x {name}
        </p>
        <div>
          <Button $secondary onClose={onClose}>
            Back to shop
          </Button>
          <Button>Show cart</Button>
        </div>
      </CartModalStyled>
    </Modal>
  );
};

export default CartModal;

CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
