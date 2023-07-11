import { setCartState } from './cart-slice';

const getCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      );
      if (!response.ok) {
        throw new Error('Error');
      }
      const responseData = await response.json();
      const fetchCart = {
        item: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
      // eslint-disable-next-line no-restricted-syntax
      for (const key in responseData.items) {
        if (Object.hasOwn(responseData.items, key)) {
          fetchCart.item.push({
            itemId: key,
            name: responseData.items[key].name,
            description: responseData.items[key].description,
            price: responseData.items[key].price,
            quantity: responseData.items[key].quantity,
          });
        }
      }
      fetchCart.totalPrice = responseData.totalPrice;
      fetchCart.totalQuantity = responseData.totalQuantity;
      dispatch(setCartState(fetchCart));
    };
    fetchData();
  };
};

export default getCartData;
