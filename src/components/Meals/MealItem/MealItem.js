import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MealItemForm from './MealItemForm';
import { cartSlice } from '../../../store/cart-slice';
import imgFood from '../../../assets/img/pizza_mix.jpg';
import { mealsSlice } from '../../../store/meals-slice';

const MealItemStyled = styled.div`
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  overflow: hidden;
`;

const MealImg = styled.img`
  width: 100%;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MealContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
  color: ${({ theme }) => theme.color.lightBlack};
`;

const MealTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
`;
const MealDecription = styled.p`
  margin: 0;
  margin-bottom: auto 0.5rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;

const BottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 1rem;
  border-top: 1px dashed ${({ theme }) => theme.color.dirtyGray};
  & p {
    margin: 0;
    color: ${({ theme }) => theme.color.intenseGreen};
  }
  & span {
    display: inline-block;
    line-height: 1;
    border-radius: 2rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.lightGreen};
  }
`;

const MealItem = ({ id, name, description, price, type = null }) => {
  const dispatch = useDispatch();
  const openDitail = () => {
    dispatch(mealsSlice.actions.setModalOpen(id));
  };
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
  const priceToNumber = +price;
  const priceFormatted = `${priceToNumber.toFixed(2)}`;

  return (
    <MealItemStyled>
      <Link to="/">
        <MealImg src={imgFood} alt={name} onClick={openDitail} />
      </Link>
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
  type: null,
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default MealItem;
