import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import { Span, Button } from './HeaderCartButton.style';

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

HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderCartButton;
