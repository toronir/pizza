import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.color.lightBlack};
  padding: 1.6rem 0;
`;

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
