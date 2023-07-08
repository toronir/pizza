import Meals from "../components/Meals/Meals";
import mealseImg from "../assets/meals.jpg";
import classes from "./HomePage.module.css";

function HomePage() {  
    return (
      <>
          <div className={classes["main-image"]}>
          <img
            src={mealseImg}
            alt="Table with food"
          />
        </div>
          <Meals />
      </>
    );
}

export default HomePage;