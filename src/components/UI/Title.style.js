import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.color.lightBlack};
  padding: 1.6rem 0;
`;

export default TitleStyled;
