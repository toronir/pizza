import styled from 'styled-components';

export const MealItemStyled = styled.div`
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  & .love-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const MealImg = styled.img`
  width: 100%;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const MealContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
  color: ${({ theme }) => theme.color.lightBlack};
`;

export const MealTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
`;
export const MealDecription = styled.p`
  margin: 0;
  margin-bottom: auto 0.5rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 1rem;
  border-top: 1px dashed ${({ theme }) => theme.color.dirtyGray};
  & p {
    margin: 0;
    color: ${({ theme }) => theme.color.intenseGreen};
  }
  & span {
    display: inline-block;
    line-height: 1;
    border-radius: 2rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.lightGreen};
  }
`;
