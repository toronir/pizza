import { useSelector } from 'react-redux';
import { SplideSlide } from '@splidejs/react-splide';
import MealItem from './MealItem/MealItem';
import Slider from '../Slider/Slider';

const AvailableMeals = () => {
  const mealsState = useSelector((state) => state.meals.products);

  const mealsList = mealsState.map((meal) => (
    <SplideSlide key={`${meal.category}_${meal.id}`}>
      <MealItem
        key={`${meal.category}_${meal.id}`}
        id={meal.id}
        name={meal.name}
        category={meal.category}
        description={meal.description}
        price={+meal.price}
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
