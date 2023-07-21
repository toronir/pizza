import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onClose }) => {
  const cartItemsState = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `${cartTotalPrice.toFixed(2)}`;
  const hasItems = cartItemsState.length > 0;
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul>
      {cartItemsState.map((item) => (
        <CartItem
          key={item.itemId}
          id={item.itemId}
          name={item.name}
          amount={item.quantity}
          price={item.price}
        />
      ))}
    </ul>
  );
  const modalAction = (
    <div>
      <button onClick={onClose}>Close</button>
      {hasItems && <button onClick={orderHandler}>Order</button>}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && modalAction}
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
