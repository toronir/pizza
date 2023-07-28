import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './MealItemForm.style';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

const MealItemForm = ({ id, price, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        hidden
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button>${price}</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </Form>
  );
};

MealItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MealItemForm;
