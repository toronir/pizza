import styled from 'styled-components';
import HeaderCartButton from './HeaderCartButton';
import MainNavigation from './MainNavigation';

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.color.dirtyGray};
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = ({ onShowCart }) => {
  return (
    <MainHeader>
      <div>
        <MainNavigation />
        <HeaderCartButton onClick={onShowCart} />
      </div>
    </MainHeader>
  );
};

export default Header;
