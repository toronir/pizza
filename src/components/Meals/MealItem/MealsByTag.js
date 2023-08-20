import { useDispatch } from 'react-redux';
import { MealstByTagBlock, MealstByTagElement } from './MealsByTag.sryle';
import { mealsSlice } from '../../../store/meals-slice';

const MealstByTag = () => {
  const dispatch = useDispatch();

  const changeTag = (tag) => {
    dispatch(mealsSlice.actions.setTagState(tag));
  };

  return (
    <MealstByTagBlock>
      <MealstByTagElement
        onClick={() => {
          changeTag('discount');
        }}
      >
        Discount
      </MealstByTagElement>
      <MealstByTagElement
        onClick={() => {
          changeTag('freeDelivery');
        }}
      >
        Free delivery
      </MealstByTagElement>
      <MealstByTagElement
        onClick={() => {
          changeTag('hot');
        }}
      >
        Hot
      </MealstByTagElement>
    </MealstByTagBlock>
  );
};
export default MealstByTag;
