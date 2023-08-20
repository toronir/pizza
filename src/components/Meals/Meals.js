import AvailableMeals from './AvailableMeals';
import Title from '../UI/Title';
import MealstByTag from './MealItem/MealsByTag';

const Meals = () => {
  return (
    <>
      <MealstByTag />
      <section>
        <Title as="h2">Free delivery</Title>
        <AvailableMeals />
      </section>
      <section>
        <Title as="h2">Fastest delivery</Title>
        <AvailableMeals />
      </section>
    </>
  );
};

export default Meals;
