import { setMealsState } from './meals-slice';

const getMealsData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/meals/pizza.json',
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
            ingredients: responseData[key].ingredients,
            tags: responseData[key].tags,
          });
        }
      }
      dispatch(setMealsState(fetchMeals));
    };
    fetchData();
  };
};

export default getMealsData;
