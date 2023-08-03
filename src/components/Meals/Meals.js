import AvailableMeals from './AvailableMeals';
import Title from '../UI/Title';

const Meals = () => {
  return (
    <>
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
