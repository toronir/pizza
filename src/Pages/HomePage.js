import { useSelector } from 'react-redux';
import { SplideSlide } from '@splidejs/react-splide';
import Meals from '../components/Meals/Meals';
import Slider from '../components/Slider/Slider';
import SlidePromo from '../components/Slider/SlidePromo';
import MealItem from '../components/Meals/MealItem/MealItem';
import Detail from '../components/Detail/Detail';
import Title from '../components/UI/Title';
import MealsSummary from '../components/Meals/MealsSummary';
import Image2 from '../assets/img/fries_burger.jpg';
import Image3 from '../assets/img/hot_burger.jpg';

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
            <SlidePromo title="Super promocja" paragraph="3 w cenie 2" />
          </SplideSlide>
          <SplideSlide>
            <SlidePromo
              title="Super promocja"
              paragraph="3 w cenie 2"
              src={Image2}
              alt="Tylko u nas!"
            />
          </SplideSlide>
          <SplideSlide>
            <SlidePromo
              title="Najlepsze oferty!"
              paragraph="3 w cenie 2"
              src={Image3}
              alt="Sprawdź naszą promocję!"
            />
          </SplideSlide>
        </Slider>
      </section>
      <MealsSummary />
      <section>
        <Title as="h2">Categories</Title>
        <Slider
          options={{
            rewind: false,
            pagination: false,
            type: 'loop',
            gap: '1rem',
            width: '100%',
            perPage: 3,
            breakpoints: {
              1400: {
                perPage: 3,
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
            <MealItem id="pizza" name="Pizza Category" description="fresh" type="category" />
          </SplideSlide>
          <SplideSlide>
            <MealItem id="burger" name="Burger Category" description="fresh" type="category" />
          </SplideSlide>
          <SplideSlide>
            <MealItem id="kebab" name="Kebab Category" description="fresh" type="category" />
          </SplideSlide>
        </Slider>
      </section>
      <Meals />
    </>
  );
};

export default HomePage;
