import PropTypes from 'prop-types';
import TitleStyled from './Title.style';

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
