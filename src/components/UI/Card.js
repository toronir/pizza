import styled from 'styled-components';

const Div = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

const Card = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Card;
