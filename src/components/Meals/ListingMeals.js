import { useSelector } from 'react-redux';
import MealItem from './MealItem/MealItem';
import Title from '../UI/Title';
import { ListingSection, MealListingStyle } from './ListingMeals.style';

const ListingMeals = () => {
  const mealsState = useSelector((state) => state.meals.products);

  const mealsList = mealsState.map((meal) => (
    <MealListingStyle>
      <MealItem
        key={`${meal.category}_${meal.id}`}
        id={meal.id}
        name={meal.name}
        category={meal.category}
        description={meal.description}
        price={+meal.price}
      />
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
