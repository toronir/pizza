import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

function AvailableMeals() {
  const setMeals = useState([])[1];
  const [isLoading, setisLoading] = useState(true);
  const [reqError, setReqError] = useState(false);
  const mealsState = useSelector((state) => state.meals.products);
  useEffect(() => {
    const waitForMeals = async () => {
      const response = await fetch(
        'https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      );
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchMeals = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const key in responseData) {
        if (Object.hasOwn(responseData, key)) {
          fetchMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
      }
      setMeals(fetchMeals);
      setisLoading(false);
    };

    waitForMeals().catch((error) => {
      setisLoading(false);
      setReqError(error.message);
    });
  }, []);
  if (isLoading) {
    return <section>LOADING....</section>;
  }
  if (reqError) {
    return (
      <section>
        <p>{reqError}</p>
      </section>
    );
  }

  const mealsList = mealsState.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
