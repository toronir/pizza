import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mealsSlice } from '../../store/meals-slice';
import { cartSlice } from '../../store/cart-slice';
import imgFood from '../../assets/img/pizza_mix.jpg';
import Modal from '../UI/Modal';
import hotFoodIcon from '../../assets/img/icons/hot-food.svg';
import discountIcon from '../../assets/img/icons/discount.svg';
import freeDeliveryIcon from '../../assets/img/icons/free-delivery.svg';
import minusIcon from '../../assets/img/icons/minus.svg';
import plusIcon from '../../assets/img/icons/plus.svg';
import { AddingProduct, Close, Icon, MealImg } from './Detail.style';

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
