import { useDispatch } from 'react-redux';
import { MealstByTagBlock, MealsByTagElement } from './MealsByTag.style';
import { setTagState } from '../../../store/meals-slice';

const MealstByTag = () => {
  const dispatch = useDispatch();
  const changeTag = (tag) => dispatch(setTagState(tag));

  return (
    <MealstByTagBlock>
      <MealsByTagElement onClick={() => changeTag('discount')}>Discount</MealsByTagElement>
      <MealsByTagElement onClick={() => changeTag('freeDelivery')}>Free delivery</MealsByTagElement>
      <MealsByTagElement onClick={() => changeTag('hot')}>Spicy</MealsByTagElement>
    </MealstByTagBlock>
  );
};
export default MealstByTag;
