import styled from 'styled-components';

export const MealListingStyle = styled.div`
  @media (min-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 1440px) {
    width: 32%;
  }
  > div {
    min-height: 385px;
  }
`;

export const ListingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1%;
`;
