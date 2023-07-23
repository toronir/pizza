import { useState } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import closeIcon from '../../assets/img/icons/x-mark.svg';

const ItemList = styled.ul`
  padding: 1rem;
`;
const Icon = styled.img`
  max-width: 2.5rem;
`;
const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: transparent;
  border: none;
  font-weight: bold;
`;
const OrderButton = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #77b28c;
  padding: 1rem;
  border-radius: 7px;
  color: white;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    > span {
      display: flex;
      background-color: white;
      color: #77b28c;
      width: 2.5rem;
      height: 2.5rem;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      border-radius: 50%;
    }
    color: white;
    border: none;
    background-color: transparent;
  }
  > span {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
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
