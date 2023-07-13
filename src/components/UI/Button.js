import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 0.25rem 2rem;
  border: 1px solid #8a2b06;
  border-radius: 20px;
  background-color: #8a2b06;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    display: inline-block;
    width: auto;
    margin-right: 15px;
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
