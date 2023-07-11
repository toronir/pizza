import { Splide } from '@splidejs/react-splide';
import SliderItem from './SliderItem';

function Slider() {
  return (
    <Splide aria-label="My Favorite Images">
      <SliderItem />
    </Splide>
  );
}

export default Slider;
