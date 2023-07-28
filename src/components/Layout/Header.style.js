import styled from 'styled-components';

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.color.dirtyGray};
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
export default MainHeader;
