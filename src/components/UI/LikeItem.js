import styled from 'styled-components';
import likeIcon from '../../assets/img/icons/love.svg';

const LikeItemStyled = styled.div`
  border-radius: 50%;
  padding: 5px;
  background-color: ${({ theme }) => theme.color.intenseGreen};
`;

const LikeItem = () => {
  return (
    <LikeItemStyled className="love-icon">
      <img src={likeIcon} alt="I love it" />
    </LikeItemStyled>
  );
};

export default LikeItem;
