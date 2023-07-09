import { setMealsState } from "./meals-slice";

export const getMealsData = () => {
  return (dispatch) => {
    const fetchData = async () => {
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
      dispatch(setMealsState(fetchMeals));
    };
    fetchData();
  };
};
