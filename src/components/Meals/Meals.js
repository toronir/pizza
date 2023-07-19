import AvailableMeals from './AvailableMeals';
import Title from '../UI/Title';

const Meals = () => {
  return (
    <>
      <section>
        <Title>Free delivery</Title>
        <AvailableMeals />
      </section>
      <section>
        <Title>Fastest delivery</Title>
        <AvailableMeals />
      </section>
    </>
  );
};

export default Meals;
