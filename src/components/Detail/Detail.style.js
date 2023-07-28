import { styled } from 'styled-components';

export const MealImg = styled.img`
  width: 100%;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;
export const Icon = styled.img`
  max-width: 2.5rem;
`;
export const Close = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  background: transparent;
  border: none;
  font-weight: bold;
`;
export const AddingProduct = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    display: flex;
    justify-content: space-around;
    width: 69%;
    background-color: #77b28c;
    padding: 1rem;
    border-radius: 7px;
    > span {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > button {
      border: none;
      background-color: transparent;
    }
  }
  > span:nth-child(odd) {
    background-color: #b6d8c2;
    width: 29%;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      border-radius: 50%;
    }
  }
`;
