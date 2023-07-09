import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartSlice } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartSlice.actions.addItemCart({
        id: props.id,
        name: props.name,
        quantity: 1,
        price: props.price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartSlice.actions.removeItemFromCart(props.id));
  };
  const price = `$${props.price.toFixed(2)}`;
  const key = props.key;

  return (
    <li key={key} className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
