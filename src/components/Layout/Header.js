import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = (props) => {
  return (
      <header className={classes.header}>
        <MainNavigation />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
  );
};

export default Header;
