import { useDispatch } from 'react-redux';
import MealItemForm from './MealItemForm';
import { cartSlice } from '../../../store/cart-slice';

const MealItem = ({ id, name, description, price }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (quantity) => {
    dispatch(
      cartSlice.actions.addItemCart({
        id,
        name,
        quantity,
        price,
      }),
    );
  };

  const priceFormatted = `${price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{priceFormatted}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
