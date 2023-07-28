import styled from 'styled-components';
import { Form } from 'react-router-dom';

const FormStyled = styled(Form)`
  max-width: 80rem;
  margin: 1rem auto;
  padding: 3rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.dirtyGray};
  & label {
    display: flex;
    flex-direction: column;
    margin: 0 auto 1rem auto;
    max-width: 80%;
    color: ${({ theme }) => theme.color.gray};
  }
  & input {
    border: 0.1rem solid ${({ theme }) => theme.color.gray};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
  }
  & > div {
    max-width: 80%;
    margin: auto;
    text-align: center;
    & a {
      display: inline-block;
      text-decoration: none;
      color: ${({ theme }) => theme.color.gray};
      margin-top: 1rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-left: 1rem;
        margin-top: 0;
      }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: left;
    }
  }
`;

export default FormStyled;
