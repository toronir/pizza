import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { mealsSlice } from '../../store/meals-slice';
import imgFood from '../../assets/img/pizza_mix.jpg';
import Modal from '../UI/Modal';
import hotFoodIcon from '../../assets/img/icons/hot-food.svg';
import discountIcon from '../../assets/img/icons/discount.svg';
import freeDeliveryIcon from '../../assets/img/icons/free-delivery.svg';
import minusIcon from '../../assets/img/icons/minus.svg';
import plusIcon from '../../assets/img/icons/plus.svg';

const MealImg = styled.img`
  width: 100%;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const Icon = styled.img`
  max-width: 2.5rem;
`;
const Close = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  background: transparent;
  border: none;
  font-weight: bold;
`;
const AddingProduct = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    display: flex;
    justify-content: space-around;
    width: 69%;
    background-color: #77b28c;
    padding: 1rem;
    border-radius: 7px;
  }
  > span:nth-child(odd) {
    background-color: #b6d8c2;
    width: 29%;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      border-radius: 50%;
    }
    > span {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Detail = () => {
  const idItemDetail = useSelector((state) => state.meals.detailModal.idItemDetail);
  const meals = useSelector((state) => state.meals.products);
  const currentProduct = meals.find((item) => item.id === idItemDetail);
  const dispatch = useDispatch();
  const closeDitail = () => {
    dispatch(mealsSlice.actions.setModalClose());
  };
  const modalAction = <Close onClick={closeDitail}>X</Close>;
  return (
    <Modal width="60rem">
      <div>
        <MealImg src={imgFood} />
        <div>{currentProduct.name}</div>
        <div>{currentProduct.description}</div>
        <div>{currentProduct.ingredients}</div>
        <div>
          <span>
            {currentProduct.tags.discount && <Icon src={discountIcon} alt="discount Icon" />}
          </span>
          <span>
            {currentProduct.tags.freeDelivery && (
              <Icon src={freeDeliveryIcon} alt="free Delivery Icon" />
            )}
          </span>
          <span>{currentProduct.tags.hot && <Icon src={hotFoodIcon} alt="hot Food Icon" />}</span>
        </div>
      </div>
      <AddingProduct>
        <span>
          <button>
            <Icon src={minusIcon} alt="minus Icon" />
          </button>
          <span>1</span>
          <button>
            <Icon src={plusIcon} alt="plus Icon" />
          </button>
        </span>
        <span>
          <button>Buy</button>
        </span>
      </AddingProduct>
      {modalAction}
    </Modal>
  );
};
export default Detail;
