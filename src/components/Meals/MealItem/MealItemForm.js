import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & input {
    text-align: center;
    min-width: 5rem;
    margin-right: 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.dirtyGray};
    border-radius: 2rem;
    padding: 0.2rem 0.5rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;

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
