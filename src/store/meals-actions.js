import { setMealsState } from './meals-slice';
import BASE_URL from '../variables/variables';

export const getMealsData = (category) => {
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

export const getMealsDataByTag = (tag) => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/meals.json`);
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchMeals = [];
      const setItem = (category) => {
        /* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
        for (const key in category) {
          if (Object.hasOwn(category, key) && category.tag === tag) {
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
      };
      // eslint-disable-next-line no-restricted-syntax
      /* eslint guard-for-in: 0 */
      for (const category in responseData) {
        console.log(category);
        setItem(category);
      }

      dispatch(setMealsState(fetchMeals));
    };
    fetchData();
  };
};
