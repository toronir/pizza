import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const isEmpty = (value) => value.trim() === "";

  const legthCheck = (value) => value.trim().length === 5;
  const [formValidity, setformValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameInputVal = nameInputRef.current.value;
    const streetInputVal = streetInputRef.current.value;
    const postalCodeInputVal = postalCodeInputRef.current.value;
    const cityInputVal = cityInputRef.current.value;

    const nameIsNotEmpty = !isEmpty(nameInputVal);
    const streetIsNotEmpty = !isEmpty(streetInputVal);
    const cityIsNotEmpty = !isEmpty(cityInputVal);
    const postalCodeIsNotEmpty = legthCheck(postalCodeInputVal);

    setformValidity({
      name: nameIsNotEmpty,
      street: streetIsNotEmpty,
      postalCode: postalCodeIsNotEmpty,
      city: cityIsNotEmpty,
    });

    const formValid =
      nameIsNotEmpty &&
      streetIsNotEmpty &&
      postalCodeIsNotEmpty &&
      cityIsNotEmpty;

    if (!formValid) {
      return;
    }
    if (formValid) {
      //submit;
    }
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name ? "" : }`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>wrong name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>wrong street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>wrong postal code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>wrong city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
