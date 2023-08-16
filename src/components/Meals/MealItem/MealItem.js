import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDownloadURL, ref } from 'firebase/storage';
import { fbStorage } from '../../../firebase-config';
import MealItemForm from './MealItemForm';
import { cartSlice } from '../../../store/cart-slice';
import { mealsSlice } from '../../../store/meals-slice';
import LikeItem from '../../UI/LikeItem';
import imgFood from '../../../assets/img/food.jpg';
import {
  BottomDiv,
  MealContent,
  MealDecription,
  MealImg,
  MealItemStyled,
  MealTitle,
} from './MealItem.style';

const MealItem = ({ id, name, description, price, category = null, type = null }) => {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(imgFood);
  const userId = useSelector((state) => state.auth.user);

  const openDetail = () => dispatch(mealsSlice.actions.setToggleModal(id));
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
  const imgName = id.includes('m') ? `${category}_${id}` : `category_${id}`;

  const imageFolderRef = ref(fbStorage, `images/${imgName}.jpg`);

  const getImgUrl = () => {
    getDownloadURL(imageFolderRef)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(imgFood));
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  const priceToNumber = +price;
  const priceFormatted = `${priceToNumber.toFixed(2)}`;

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
