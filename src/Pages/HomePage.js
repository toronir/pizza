import { useSelector } from 'react-redux';
import { SplideSlide } from '@splidejs/react-splide';
import Meals from '../components/Meals/Meals';
import Slider from '../components/Slider/Slider';
import SlidePromo from '../components/Slider/SlidePromo';
import Detail from '../components/Detail/Detail';
import Title from '../components/UI/Title';
import MealsSummary from '../components/Meals/MealsSummary';
import Image1 from '../assets/img/promo_slider_main/promobanner_1.png';
import Image2 from '../assets/img/promo_slider_main/promobanner_2.png';
import Image3 from '../assets/img/promo_slider_main/promobanner_3.png';
import Image4 from '../assets/img/promo_slider_main/promobanner_4.png';
import Image5 from '../assets/img/promo_slider_main/promobanner_5.png';
import CategotyItem from '../components/Meals/MealItem/CategoryItem';

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
            <SlidePromo
              title="Super promocja"
              paragraph="3 w cenie 2"
              src={Image1}
              alt="Tylko u nas!"
            />
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
          <SplideSlide>
            <SlidePromo
              title="Najlepsze oferty!"
              paragraph="3 w cenie 2"
              src={Image4}
              alt="Sprawdź naszą promocję!"
            />
          </SplideSlide>
          <SplideSlide>
            <SlidePromo
              title="Najlepsze oferty!"
              paragraph="3 w cenie 2"
              src={Image5}
              alt="Sprawdź naszą promocję!"
            />
          </SplideSlide>
        </Slider>
      </section>
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
            <CategotyItem id="pizza" name="Pizza Category" description="fresh" type="category" />
          </SplideSlide>
          <SplideSlide>
            <CategotyItem id="burger" name="Burger Category" description="fresh" type="category" />
          </SplideSlide>
          <SplideSlide>
            <CategotyItem id="kebab" name="Kebab Category" description="fresh" type="category" />
          </SplideSlide>
          <SplideSlide>
            <CategotyItem id="fries" name="Fries Category" description="fresh" type="category" />
          </SplideSlide>
        </Slider>
      </section>
      <MealsSummary />
      <Meals />
    </>
  );
};

export default HomePage;
