import { styled } from 'styled-components';

export const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 1.5rem;
  > div:nth-child(odd) {
    display: flex;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      font-weight: bold;
    }
  }
`;

export const MealImg = styled.img`
  width: 100%;
  height: 5rem;
  width: 10rem;
  object-fit: cover;
  margin-right: 1rem;
`;
export const AddingProduct = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    display: flex;
    justify-content: space-around;
    width: 15rem;
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
export const Icon = styled.img`
  max-width: 2.5rem;
`;
