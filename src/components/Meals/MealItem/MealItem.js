import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../../store/cart-slice";

const MealItem = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (quantity) => {
    dispatch(
      cartSlice.actions.addItemCart({
        id: props.id,
        name: props.name,
        quantity: quantity,
        price: props.price,
      })
    );
  };
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
