import styled from 'styled-components';

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

export default Form;
