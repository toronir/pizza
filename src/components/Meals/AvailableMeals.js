import { useSelector } from 'react-redux';
import { SplideSlide } from '@splidejs/react-splide';
import MealItem from './MealItem/MealItem';
import Slider from '../Slider/Slider';

const AvailableMeals = () => {
  const mealsState = useSelector((state) => state.meals.products);

  const mealsList = mealsState.map(({ category, id, name, description, price }) => (
    <SplideSlide key={`${category}_${id}`}>
      <MealItem
        key={`${category}_${id}`}
        id={id}
        name={name}
        category={category}
        description={description}
        price={+price}
      />
    </SplideSlide>
  ));

  return (
    <section>
      <Slider
        options={{
          rewind: false,
          pagination: false,
          type: 'loop',
          gap: '1rem',
          width: '100%',
          perPage: 3,
          breakpoints: {
            1300: {
              perPage: 2,
            },
            800: {
              perPage: 1,
            },
          },
        }}
      >
        {mealsList}
      </Slider>
    </section>
  );
};

export default AvailableMeals;
