import styled from 'styled-components';

const LikeItemStyled = styled.div`
  border-radius: 50%;
  padding: 5px;
  background-color: ${({ theme: { color } }) => color.intenseGreen};
`;

export default LikeItemStyled;
