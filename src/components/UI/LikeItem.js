import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { sendWhishlistData } from '../../store/whislist-actions';
import likeIcon from '../../assets/img/icons/love.svg';
import LikeItemStyled from './LikeItem.style';

const LikeItem = ({ id, name, price, description, userId }) => {
  const whishlist = [{ item: { id, name, price, description } }];
  const dispatch = useDispatch();
  const addToWhishList = () => {
    dispatch(sendWhishlistData(userId, whishlist));
  };
  return (
    <LikeItemStyled className="love-icon" onClick={addToWhishList}>
      <img src={likeIcon} alt="I love it" />
    </LikeItemStyled>
  );
};

export default LikeItem;

LikeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
};
