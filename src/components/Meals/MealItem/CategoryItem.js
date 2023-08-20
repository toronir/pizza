import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDownloadURL, ref } from 'firebase/storage';
import { mealsSlice } from '../../../store/meals-slice';
import { fbStorage } from '../../../firebase-config';
import imgFood from '../../../assets/img/food.jpg';
import { MealContent, MealDecription, MealImg, MealItemStyled, MealTitle } from './MealItem.style';
import NavLinkStyled from '../../Layout/FooterItem.style';

const CategotyItem = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(imgFood);
  const mealsCategory = useSelector((state) => state.meals.category);
  const imgName = id.includes('m') ? `${mealsCategory}_${id}` : `category_${id}`;
  const changeCategory = () => {
    dispatch(mealsSlice.actions.setCategoryState(id));
  };

  const imageFolderRef = ref(fbStorage, `images/${imgName}.jpg`);

  const getImgUrl = () => {
    getDownloadURL(imageFolderRef)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(imgFood));
  };

  useEffect(() => {
    getImgUrl();
  }, []);
  return (
    <NavLinkStyled to="category">
      <MealItemStyled>
        <MealImg src={imgUrl} alt={name} onClick={changeCategory} />
        <MealContent>
          <div>
            <MealTitle>{name}</MealTitle>
            <MealDecription>{description}</MealDecription>
          </div>
        </MealContent>
      </MealItemStyled>
    </NavLinkStyled>
  );
};
CategotyItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CategotyItem;
