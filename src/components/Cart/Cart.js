import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Close, ItemList, Icon, OrderButton } from './Cart.style';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import closeIcon from '../../assets/img/icons/x-mark.svg';

const Cart = ({ onClose }) => {
  const cartItemsState = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `${cartTotalPrice.toFixed(2)}`;
  const hasItems = cartItemsState.length > 0;
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ItemList>
      {cartItemsState.map((item) => (
        <CartItem
          key={item.itemId}
          id={item.itemId}
          name={item.name}
          amount={item.quantity}
          price={item.price}
        />
      ))}
    </ItemList>
  );
  const modalAction = (
    <Close onClick={onClose}>
      <Icon src={closeIcon} alt="close icon" />
    </Close>
  );
  const orderButton = (
    <OrderButton onClick={orderHandler} role="button" tabIndex={0} onKeyPress={orderHandler}>
      <button>
        <span>{cartTotalQuantity}</span>Add to order
      </button>
      <span>{totalAmount}$</span>
    </OrderButton>
  );

  return (
    <Modal onClose={onClose}>
      {modalAction}
      <h2>Your order</h2>
      {cartItems}

      {isCheckout && <Checkout onCancel={onClose} />}
      {hasItems && orderButton}
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
