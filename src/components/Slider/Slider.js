// eslint-disable-next-line import/no-unresolved
import { Splide } from '@splidejs/react-splide';
import SliderItem from './SliderItem';

const Slider = () => {
  return (
    <Splide aria-label="My Favorite Images">
      <SliderItem />
    </Splide>
  );
};

export default Slider;
