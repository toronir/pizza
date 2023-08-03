import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 40%;
  padding-right: 5%;
  & a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.lightBlack};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 2rem 0.5rem 2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.dirtyGray};
    width: 100%;
  }
`;

export default SidebarContainer;
