import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [reqError, setReqError] = useState(false);
  useEffect(() => {
    const waitForMeals = async () => {
      const response = await fetch(
        "https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const responseData = await response.json();
      const fetchMeals = [];

      for (const key in responseData) {
        fetchMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
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
    return <section className={classes.mealsLoading}>LOADING....</section>;
  }
  if (reqError) {
    return (
      <section className={classes.mealsError}>
        <p>{reqError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
