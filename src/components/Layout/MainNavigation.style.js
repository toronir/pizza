import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  & a {
    text-decoration: none;
    display: block;
    font-weight: 600;
    padding: 0.25rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
    @media (min-width: 768px) {
      display: inline-block;
      width: auto;
    }
    ${({ theme: { color } }) =>
      color &&
      css`
        color: ${color.white};
        border: 1px solid ${color.lightGreen};
        background-color: ${color.lightGreen};
      `}
  }
`;

export const LoggedItems = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 6rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    & > ul {
      display: flex;
    }
  }
  & > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: max-content;
    flex-direction: column;
    padding: 2rem;
    background: ${({ theme }) => theme.color.dirtyGray};
    list-style: none;
    border-radius: 0.4rem;
    text-align: left;
    z-index: 3;
  }
  & img {
    vertical-align: bottom;
  }
  button {
    color: ${({ theme }) => theme.color.lightBlack};
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  & a {
    display: inline-block;
    color: ${({ theme }) => theme.color.lightBlack};
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
`;
