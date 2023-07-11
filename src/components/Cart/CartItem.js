import { useDispatch } from 'react-redux';
import { cartSlice } from '../../store/cart-slice';

function CartItem({ id, name, price, key, amount }) {
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
    <li key={key}>
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
}

export default CartItem;
