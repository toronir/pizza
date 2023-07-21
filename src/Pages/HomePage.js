import { useSelector } from 'react-redux';
import { SplideSlide } from '@splidejs/react-splide';
import Meals from '../components/Meals/Meals';
import Slider from '../components/Slider/Slider';
import MealItem from '../components/Meals/MealItem/MealItem';
import Detail from '../components/Detail/Detail';
import Title from '../components/UI/Title';
import MealsSummary from '../components/Meals/MealsSummary';

const HomePage = () => {
  const detailModal = useSelector((state) => state.meals.detailModal);
  return (
    <>
      {detailModal.isModalOpen && <Detail />}
      <section>
        <Slider
          options={{
            rewind: false,
            type: 'loop',
            gap: '1rem',
            width: '100%',
            perPage: 2,
            breakpoints: {
              768: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <MealItem id="2" name="category 1" description="fresh" price="12" type="category" />
          </SplideSlide>
          <SplideSlide>
            <MealItem id="2" name="category 1" description="fresh" price="12" type="category" />
          </SplideSlide>
          <SplideSlide>
            <MealItem id="2" name="category 1" description="fresh" price="12" type="category" />
          </SplideSlide>
        </Slider>
      </section>
      <MealsSummary />
      <section>
        <Title>Categories</Title>
        <Slider
          options={{
            rewind: false,
            pagination: false,
            type: 'loop',
            gap: '1rem',
            width: '100%',
            perPage: 6,
            breakpoints: {
              1400: {
                perPage: 4,
              },
              992: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              568: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <MealItem id="2" name="category 1" description="fresh" price="12" type="category" />
          </SplideSlide>
        </Slider>
      </section>
      <Meals />
    </>
  );
};

export default HomePage;
