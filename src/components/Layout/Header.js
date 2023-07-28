import PropTypes from 'prop-types';
import HeaderCartButton from './HeaderCartButton';
import MainNavigation from './MainNavigation';
import MainHeader from './Header.style';

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

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
