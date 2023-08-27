import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useImgUrl from '../../../hooks/useImgUrl';
import MealItemForm from './MealItemForm';
import { addItemCart } from '../../../store/cart-slice';
import { sendCartData } from '../../../store/cart-actions';
import { setToggleModal } from '../../../store/meals-slice';
import LikeItem from '../../UI/LikeItem';
import {
  BottomDiv,
  MealContent,
  MealDecription,
  MealImg,
  MealItemStyled,
  MealTitle,
} from './MealItem.style';

const MealItem = ({ id, name, description, price, category = null, type = null }) => {
  const imgUrl = useImgUrl(`${category}_${id}`);
  const priceFormatted = `${+price.toFixed(2)}`;

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);

  const openDetail = () => dispatch(setToggleModal(id));

  const addToCartHandler = (quantity) => {
    dispatch(addItemCart({ id, name, quantity, price: +price }));
    dispatch(sendCartData());
  };

  const setShortDiscription = (itemDescription) => {
    if (description.length > 47) {
      let newDescription = itemDescription.substring(0, 44);
      newDescription += ' ...';
      return newDescription;
    }
    return description;
  };

  return (
    <MealItemStyled>
      {!type && userId && (
        <LikeItem
          id={id}
          name={name}
          description={description}
          price={price}
          src={imgUrl}
          category={category}
        />
      )}
      <MealImg src={imgUrl} alt={name} onClick={!type ? openDetail : null} />
      <MealContent>
        <div>
          <MealTitle>{name}</MealTitle>
          <MealDecription>{setShortDiscription(description)}</MealDecription>
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
  category: null,
  type: null,
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  category: PropTypes.string,
  type: PropTypes.string,
};

export default MealItem;
