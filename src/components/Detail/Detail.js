import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { mealsSlice } from '../../store/meals-slice';
import { cartSlice } from '../../store/cart-slice';
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
    width: 29%;
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
const Detail = () => {
  const meals = useSelector((state) => state.meals.products);
  const idItemDetail = useSelector((state) => state.meals.detailModal.idItemDetail);
  const currentProduct = meals.find((item) => item.id === idItemDetail);

  const [product, setOProduct] = useState(1);
  const [sumPrice, setSumPrice] = useState(currentProduct.price);

  const dispatch = useDispatch();
  const closeDitail = () => {
    dispatch(mealsSlice.actions.setModalClose());
  };
  const addItemHandler = () => {
    dispatch(
      cartSlice.actions.addItemCart({
        id: currentProduct.id,
        name: currentProduct.name,
        quantity: product,
        price: currentProduct.price,
      }),
    );
    closeDitail();
  };
  const plusProdouct = () => {
    let prodValue = product;
    let priceValue = sumPrice;
    setOProduct((prodValue += 1));
    setSumPrice((priceValue += currentProduct.price));
  };
  const minusProdouct = () => {
    let prodValue = product;
    let priceValue = sumPrice;
    if (prodValue > 1) {
      setOProduct((prodValue -= 1));
      setSumPrice((priceValue -= currentProduct.price));
    }
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
          <button onClick={minusProdouct}>
            <Icon src={minusIcon} alt="minus Icon" />
          </button>
          <span>{product}</span>
          <button onClick={plusProdouct}>
            <Icon src={plusIcon} alt="plus Icon" />
          </button>
        </span>
        <span onClick={addItemHandler} role="button" tabIndex={0} onKeyPress={addItemHandler}>
          <button>Add to order</button>
          <span>{sumPrice.toFixed(2)}$</span>
        </span>
      </AddingProduct>
      {modalAction}
    </Modal>
  );
};
export default Detail;
