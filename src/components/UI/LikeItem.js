import likeIcon from '../../assets/img/icons/love.svg';
import LikeItemStyled from './LikeItem.style';

const LikeItem = () => {
  return (
    <LikeItemStyled className="love-icon">
      <img src={likeIcon} alt="I love it" />
    </LikeItemStyled>
  );
};

export default LikeItem;
