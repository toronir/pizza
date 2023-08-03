import { styled } from 'styled-components';

export const ItemList = styled.ul`
  padding: 1rem;
`;
export const Icon = styled.img`
  max-width: 2.5rem;
`;
export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export const OrderButton = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #77b28c;
  padding: 1rem;
  border-radius: 7px;
  color: white;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    > span {
      display: flex;
      background-color: white;
      color: #77b28c;
      width: 2.5rem;
      height: 2.5rem;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      border-radius: 50%;
    }
    color: white;
    border: none;
    background-color: transparent;
  }
  > span {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
