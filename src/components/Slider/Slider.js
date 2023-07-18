import { Splide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

const Slider = ({ options, children }) => {
  return (
    <Splide options={options} aria-label="My Favorite Meals">
      {children}
    </Splide>
  );
};

export default Slider;
