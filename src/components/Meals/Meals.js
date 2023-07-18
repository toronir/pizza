import AvailableMeals from './AvailableMeals';
import Title from '../UI/Title';

const Meals = () => {
  return (
    <>
      <Title>Free delivery</Title>
      <AvailableMeals />
      <Title>Fastest delivery</Title>
      <AvailableMeals />
    </>
  );
};

export default Meals;
