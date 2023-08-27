import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useImgUrl from '../../../hooks/useImgUrl';
import { setCategoryState } from '../../../store/meals-slice';
import { MealContent, MealDecription, MealImg, MealItemStyled, MealTitle } from './MealItem.style';
import NavLinkStyled from '../../Layout/FooterItem.style';

const CategotyItem = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const mealsCategory = useSelector((state) => state.meals.category);
  const imgName = id.includes('m') ? `${mealsCategory}_${id}` : `category_${id}`;
  const imgUrl = useImgUrl(imgName);
  const changeCategory = () => dispatch(setCategoryState(id));

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
