import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MealItemForm from './MealItemForm';
import { cartSlice } from '../../../store/cart-slice';
import imgFood from '../../../assets/img/pizza_mix.jpg';
import { mealsSlice } from '../../../store/meals-slice';
import LikeItem from '../../UI/LikeItem';
import {
  BottomDiv,
  MealContent,
  MealDecription,
  MealImg,
  MealItemStyled,
  MealTitle,
} from './MealItem.style';

const MealItem = ({ id, name, description, price, type = null }) => {
  const dispatch = useDispatch();
  const openDitail = () => {
    dispatch(mealsSlice.actions.setModalOpen(id));
  };
  const addToCartHandler = (quantity) => {
    dispatch(
      cartSlice.actions.addItemCart({
        id,
        name,
        quantity,
        price: +price,
      }),
    );
  };
  const priceToNumber = +price;
  const priceFormatted = `${priceToNumber.toFixed(2)}`;

  return (
    <MealItemStyled>
      <Link to="/">
        {!type && <LikeItem />}
        <MealImg src={imgFood} alt={name} onClick={openDitail} />
      </Link>
      <MealContent>
        <div>
          <MealTitle>{name}</MealTitle>
          <MealDecription>{description}</MealDecription>
        </div>
        {!type && <MealItemForm id={id} price={+priceFormatted} onAddToCart={addToCartHandler} />}
      </MealContent>
      {!type && (
        <BottomDiv>
          <p>FREE DELIVERY!</p>
          <span>20-30 minutes</span>
        </BottomDiv>
      )}
    </MealItemStyled>
  );
};

MealItem.defaultProps = {
  price: null,
  type: null,
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default MealItem;
