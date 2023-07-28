import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  width: 100%;
  padding: 0.25rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  ${({ theme: { color, bold } }) =>
    bold &&
    color &&
    css`
      color: ${color.white};
      background-color: ${color.lightGreen};
      font-weight: ${bold};
      border: 1px solid ${color.lightGreen};
    `};
  @media (min-width: 768px) {
    display: inline-block;
    width: auto;
  }
`;

export default ButtonStyled;
