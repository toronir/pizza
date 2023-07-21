import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { mealsSlice } from '../../store/meals-slice';
import imgFood from '../../assets/img/pizza_mix.jpg';
import Modal from '../UI/Modal';

const MealImg = styled.img`
  width: 100%;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Detail = () => {
  const idItemDetail = useSelector((state) => state.meals.detailModal.idItemDetail);
  const meals = useSelector((state) => state.meals.products);
  const currentProduct = meals.find((item) => item.id === idItemDetail);
  const dispatch = useDispatch();
  const closeDitail = () => {
    dispatch(mealsSlice.actions.setModalClose());
  };
  const modalAction = (
    <div>
      <button onClick={closeDitail}>Close</button>
    </div>
  );
  return (
    <Modal onClose={closeDitail} width="60rem">
      <div>
        <MealImg src={imgFood} />
        <div>{currentProduct.name}</div>
        <div>{currentProduct.description}</div>
        <div>{currentProduct.ingredients}</div>
        <div>
          <span>{currentProduct.tags.discount && '%%% '}</span>
          <span>{currentProduct.tags.freeDelivery && 'Free Delivery '}</span>
          <span>{currentProduct.tags.hot && 'Hot! '}</span>
        </div>
        <span>gg</span>
      </div>
      {modalAction}
    </Modal>
  );
};
export default Detail;
