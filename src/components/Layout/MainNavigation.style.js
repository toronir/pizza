import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    display: block;
    font-weight: 600;
    padding: 0.25rem 2rem;
    border-radius: 2rem;
    border: 1px solid ${({ theme }) => theme.color.lightGreen};
    background-color: ${({ theme }) => theme.color.lightGreen};
    cursor: pointer;
    @media (min-width: 768px) {
      display: inline-block;
      width: auto;
    }
  }
`;
