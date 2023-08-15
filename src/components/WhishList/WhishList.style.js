import styled from 'styled-components';

export const WhishListContainer = styled.div`
  flex-basis: 60%;
`;

export const WhislistHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  & h1 {
    margin: 0;
  }
  @media (min-width: 992px) {
    justify-content: space-between;
    & h1 {
      margin: 1.6rem 0;
    }
  }
`;
export const WhishListItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  & > div {
    flex-basis: 100%;
    @media (min-width: 992px) {
      flex-basis: calc(50% - 0.5rem);
    }
  }
`;
