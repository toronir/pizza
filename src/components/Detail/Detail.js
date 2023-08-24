import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleModal } from '../../store/meals-slice';
import { addItemCart } from '../../store/cart-slice';
import Modal from '../UI/Modal';
import imgFood from '../../assets/img/food.jpg';
import hotFoodIcon from '../../assets/img/icons/hot-food.svg';
import discountIcon from '../../assets/img/icons/discount.svg';
import freeDeliveryIcon from '../../assets/img/icons/free-delivery.svg';
import minusIcon from '../../assets/img/icons/minus.svg';
import plusIcon from '../../assets/img/icons/plus.svg';
import closeIcon from '../../assets/img/icons/close.svg';
import { AddingProduct, Close, Icon, MealImg } from './Detail.style';

const Detail = () => {
  const meals = useSelector((state) => state.meals.products);
  const idItemDetail = useSelector((state) => state.meals.detailModal.idItemDetail);
  const currentProduct = meals.find((item) => item.id === idItemDetail);

  const [product, setProduct] = useState(1);
  const [sumPrice, setSumPrice] = useState(currentProduct.price);

  const dispatch = useDispatch();
  const closeDetail = () => {
    dispatch(setToggleModal());
  };
  const addItemHandler = () => {
    dispatch(
      addItemCart({
        id: currentProduct.id,
        name: currentProduct.name,
        quantity: product,
        price: currentProduct.price,
      }),
    );
    closeDetail();
  };

  const updateProduct = (e, type = 'plus') => {
    let prodValue = product;
    let priceValue = sumPrice;
    const isMinimum = prodValue > 1;

    if (type !== 'plus' && isMinimum) {
      prodValue -= 1;
      priceValue -= currentProduct.price;
    } else if (type === 'plus') {
      prodValue += 1;
      priceValue += currentProduct.price;
    }

    setProduct(prodValue);
    setSumPrice(priceValue);
  };

  const modalAction = (
    <Close onClick={closeDetail}>
      <Icon src={closeIcon} alt="close" />
    </Close>
  );
  return (
    <Modal width="60rem">
      <div>
        <MealImg src={imgFood} />
        <div>{currentProduct.name}</div>
        <div>{currentProduct.description}</div>
        <div>{currentProduct.ingredients}</div>
        <div>
          <span>
            {currentProduct.tags.discount && <Icon src={discountIcon} alt="discount icon" />}
          </span>
          <span>
            {currentProduct.tags.freeDelivery && (
              <Icon src={freeDeliveryIcon} alt="free delivery icon" />
            )}
          </span>
          <span>{currentProduct.tags.hot && <Icon src={hotFoodIcon} alt="hot food icon" />}</span>
        </div>
      </div>
      <AddingProduct>
        <span>
          <button onClick={(e) => updateProduct(e, 'minus')}>
            <Icon src={minusIcon} alt="minus Icon" />
          </button>
          <span>{product}</span>
          <button onClick={(e) => updateProduct(e)}>
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
