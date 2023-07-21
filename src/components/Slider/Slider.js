import { Splide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderStyled = styled(Splide)`
  padding-bottom: 3rem;
  & .splide__pagination button {
    width: 1.2rem;
    height: 1.2rem;
  }
  & .splide__pagination button.is-active {
    background-color: ${({ theme }) => theme.color.intenseGreen};
  }
`;

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
