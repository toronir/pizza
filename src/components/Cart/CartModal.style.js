import styled from 'styled-components';

const CartModalStyled = styled.div`
  padding: 1.5rem;
  & header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    h2 {
      margin: 0.5rem 0;
    }
    & button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
  & p {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    & img {
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`;

export default CartModalStyled;
