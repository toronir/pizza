import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartIcon from '../Cart/CartIcon';
// import Button from '../UI/Button';

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0 0.5rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightGreen};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
`;

const HeaderCartButton = ({ onClick }) => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Button onClick={onClick}>
      <CartIcon />
      <Span>Your Cart</Span>
      <span> {quantity}</span>
    </Button>
  );
};

export default HeaderCartButton;
