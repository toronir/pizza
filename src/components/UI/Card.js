import PropTypes from 'prop-types';
import Div from './Card.style';

const Card = ({ children, maxwidth = null }) => {
  return <Div maxwidth={maxwidth}>{children}</Div>;
};

Card.defaultProps = {
  maxwidth: null,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  maxwidth: PropTypes.string,
};

export default Card;
