import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { cartSlice } from '../../store/cart-slice';
import imgFood from '../../assets/img/pizza_mix.jpg';
import minusIcon from '../../assets/img/icons/minus.svg';
import plusIcon from '../../assets/img/icons/plus.svg';

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 1.5rem;
  > div:nth-child(odd) {
    display: flex;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      font-weight: bold;
    }
  }
`;

const MealImg = styled.img`
  width: 100%;
  height: 5rem;
  width: 10rem;
  object-fit: cover;
  margin-right: 1rem;
`;
const AddingProduct = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    display: flex;
    justify-content: space-around;
    width: 15rem;
    background-color: #77b28c;
    padding: 1rem;
    border-radius: 7px;
    > span {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > button {
      border: none;
      background-color: transparent;
    }
  }
  > span:nth-child(odd) {
    background-color: #b6d8c2;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      border-radius: 50%;
    }
  }
`;
const Icon = styled.img`
  max-width: 2.5rem;
`;

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
