/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';

function Checkout({ onCancel }) {
  const isEmpty = (value) => value.trim() === '';

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

    const formValid = nameIsNotEmpty && streetIsNotEmpty && postalCodeIsNotEmpty && cityIsNotEmpty;

    if (!formValid) {
      return;
    }
    if (formValid) {
      // submit;
    }
  };
  return (
    <form onSubmit={confirmHandler}>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>wrong name</p>}
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>wrong street</p>}
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>wrong postal code</p>}
      </div>
      <div>
        <label htmlFor="city" label="Surname">
          City
        </label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>wrong city</p>}
      </div>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
}
export default Checkout;
