import PropTypes from 'prop-types';
import ButtonStyled from './Button.style';

const Button = ({ children, type = 'button', ...props }) => {
  return (
    <ButtonStyled type={type} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  type: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
