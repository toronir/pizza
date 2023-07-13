import styled from 'styled-components';

const Pargraph = styled.p`
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 10px 0;
  &.error {
    color: #a94442;
    background-color: #f2dede;
  }
  &.succes {
    color: #3c763d;
    background-color: #dff0d8;
  }
  &.info {
    color: #31708f;
    background-color: #d9edf7;
  }
  &.warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
  }
`;

const Alert = ({ message, type = 'error' }) => {
  return <Pargraph type={type}>{message}</Pargraph>;
};

export default Alert;
