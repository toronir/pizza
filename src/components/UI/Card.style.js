import styled, { css } from 'styled-components';

const Div = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;

  ${({ maxwidth }) =>
    maxwidth &&
    css`
      max-width: ${maxwidth};
      margin: 0 auto;
    `};
`;

export default Div;
