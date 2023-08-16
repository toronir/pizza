import { setMealsState } from './meals-slice';
import BASE_URL from '../variables/variables';

const getMealsData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/meals.json`);
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchMeals = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const key in responseData) {
        if (Object.hasOwn(responseData, key)) {
          const categories = Object.keys(responseData[key]);
          categories.forEach((category) => {
            const item = responseData[key][category];
            fetchMeals.push({
              id: category,
              name: item.name,
              category: key,
              description: item.description,
              price: item.price,
              ingredients: item.ingredients,
              tags: item.tags,
            });
          });
        }
      }
      dispatch(setMealsState(fetchMeals));
    };
    fetchData();
  };
};

export default getMealsData;
