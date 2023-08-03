import styled, { css } from 'styled-components';

const Title = styled.h2`
  padding: 1.6rem 0;
  ${({ theme: { fontSize, bold, color } }) =>
    fontSize &&
    bold &&
    color &&
    css`
      font-size: ${fontSize.l};
      font-weight: ${bold};
      color: ${color.lightBlack};
    `};
`;

export default Title;
