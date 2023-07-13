import { useSelector } from 'react-redux';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ({ onClick }) => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
