import { useSelector } from 'react-redux';
import MealItem from './MealItem/MealItem';
import Title from '../UI/Title';
import { ListingSection, MealListingStyle } from './ListingMeals.style';

const ListingMeals = () => {
  const mealsState = useSelector((state) => state.meals.products);

  const mealsList = mealsState.map(({ id, category, name, description, price }) => (
    <MealListingStyle key={`${category}_${id}`}>
      <MealItem id={id} name={name} category={category} description={description} price={+price} />
    </MealListingStyle>
  ));

  return (
    <>
      <Title as="h2">Free delivery</Title>
      <ListingSection>{mealsList}</ListingSection>;
    </>
  );
};

export default ListingMeals;
