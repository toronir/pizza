import PropTypes from 'prop-types';
import Container from './Card.style';

const Card = ({ children, maxwidth = null }) => {
  return <Container maxwidth={maxwidth}>{children}</Container>;
};

Card.defaultProps = {
  maxwidth: null,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  maxwidth: PropTypes.string,
};

export default Card;
