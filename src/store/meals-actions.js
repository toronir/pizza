import { setMealsState } from './meals-slice';
import BASE_URL from '../variables/variables';

export const getMealsData = (category, tag = null) => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/meals/${category}.json`);
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchMeals = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const key in responseData) {
        if (Object.hasOwn(responseData, key)) {
          if (tag === null || responseData[key].tags[tag] === true) {
            fetchMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              category,
              price: responseData[key].price,
              ingredients: responseData[key].ingredients,
              tags: responseData[key].tags,
            });
          }
        }
      }
      dispatch(setMealsState(fetchMeals));
    };
    fetchData();
  };
};

export default getMealsData;
