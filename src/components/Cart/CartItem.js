import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cartSlice } from '../../store/cart-slice';

const CartItem = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartSlice.actions.addItemCart({
        id,
        name,
        quantity: 1,
        price,
      }),
    );
  };
  const removeItemHandler = () => {
    dispatch(cartSlice.actions.removeItemFromCart(id));
  };
  const priceFormatted = `${price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h2>{name}</h2>
        <div>
          <span>{priceFormatted}</span>
          <span>x {amount}</span>
        </div>
      </div>
      <div>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
