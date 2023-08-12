import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cartSlice } from '../../store/cart-slice';
import imgFood from '../../assets/img/food.jpg';
import minusIcon from '../../assets/img/icons/minus.svg';
import plusIcon from '../../assets/img/icons/plus.svg';
import trashIcon from '../../assets/img/icons/trash.svg';
import { AddingProduct, Icon, ItemBlock, MealImg } from './CartItem.style';

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

  const removeTypeOfMeal = () => {
    dispatch(
      cartSlice.actions.removeTypeItems({
        id,
      }),
    );
  };
  const priceFormatted = `${price.toFixed(2)}`;

  return (
    <ItemBlock>
      <div>
        <MealImg src={imgFood} alt={name} />
        <div>
          <span>{name}</span>
          <span>{priceFormatted}$</span>
        </div>
      </div>

      <AddingProduct>
        <span>
          <button onClick={removeItemHandler}>
            <Icon src={minusIcon} alt="minus Icon" />
          </button>
          <span>{amount}</span>
          <button onClick={addItemHandler}>
            <Icon src={plusIcon} alt="plus Icon" />
          </button>
        </span>
        <button onClick={removeTypeOfMeal}>
          <Icon src={trashIcon} alt="delete items" />
        </button>
      </AddingProduct>
    </ItemBlock>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
