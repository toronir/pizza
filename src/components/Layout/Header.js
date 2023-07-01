import { Fragment } from "react";

import mealseImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mealse</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          className="h-full w-[110%] object-cover"
          src={mealseImg}
          alt="Table with food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
