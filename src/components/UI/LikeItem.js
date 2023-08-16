import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../store/whishlist-slice';
import likeIcon from '../../assets/img/icons/love.svg';
import checkIcon from '../../assets/img/icons/check.svg';
import LikeItemStyled from './LikeItem.style';

const LikeItem = ({ id, name, category, price, description }) => {
  const whishlist = useSelector((state) => state.whishlist);

  const checkedProduct = whishlist.products.find((product) => {
    return product.item.id === id;
  });

  const dispatch = useDispatch();

  const addToWhishList = () => {
    dispatch(addProduct({ item: { id, name, category, price, description } }));
  };
  const removeProductFromWhishList = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <LikeItemStyled
      className="love-icon"
      onClick={checkedProduct ? removeProductFromWhishList : addToWhishList}
    >
      <img src={checkedProduct ? checkIcon : likeIcon} alt="I love it" />
    </LikeItemStyled>
  );
};

export default LikeItem;

LikeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
