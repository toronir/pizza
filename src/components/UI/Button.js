import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  width: 100%;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.color.white};
  padding: 0.25rem 2rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
  background-color: ${({ theme }) => theme.color.lightGreen};
  cursor: pointer;
  @media (min-width: 768px) {
    display: inline-block;
    width: auto;
  }
`;

const Button = ({ children, type }, props) => {
  return (
    <ButtonStyled type={type} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
