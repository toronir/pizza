import PropTypes from 'prop-types';
import SliderStyled from './Slider.style';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

const Slider = ({ options, children }) => {
  return (
    <SliderStyled options={options} aria-label="My Favorite Meals">
      {children}
    </SliderStyled>
  );
};

Slider.defaultProps = {
  options: null,
};

Slider.propTypes = {
  options: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export default Slider;
