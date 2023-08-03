import styled, { css } from 'styled-components';

const handleColors = (type) => {
  let color;
  let background;
  switch (type) {
    case 'success':
      color = '#3c763d';
      background = '#dff0d8';
      break;
    case 'info':
      color = '#31708f';
      background = '#d9edf7';
      break;
    case 'warning':
      color = '#8a6d3b';
      background = '#fcf8e3';
      break;
    default:
      color = '#a94442';
      background = '#f2dede';
  }
  return { background, color };
};

const Pargraph = styled.p`
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 10px 0;
  ${({ type }) =>
    type &&
    css`
      color: ${handleColors(type).color};
      background-color: ${handleColors(type).background};
    `}
`;

export default Pargraph;
