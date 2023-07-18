import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.color.lightBlack};
`;

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
