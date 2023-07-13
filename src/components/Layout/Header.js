import styled from 'styled-components';
import HeaderCartButton from './HeaderCartButton';
import MainNavigation from './MainNavigation';

const MainHeader = styled.header`
  background-color: white;
`;

const Header = ({ onShowCart }) => {
  return (
    <MainHeader>
      <MainNavigation />
      <HeaderCartButton onClick={onShowCart} />
    </MainHeader>
  );
};

export default Header;
