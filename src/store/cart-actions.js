import { setCartState } from "./cart-slice";

export const getCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-b3fdf-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const responseData = await response.json();
      const fetchCart = {
        item: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
      for (const key in responseData.items) {
        fetchCart.item.push({
          itemId: key,
          name: responseData.items[key].name,
          description: responseData.items[key].description,
          price: responseData.items[key].price,
          quantity: responseData.items[key].quantity,
        });
      }
      fetchCart.totalPrice = responseData.totalPrice;
      fetchCart.totalQuantity = responseData.totalQuantity;
      console.log("getted");
      console.log(fetchCart);
      dispatch(setCartState(fetchCart));
    };
    fetchData();
  };
};
