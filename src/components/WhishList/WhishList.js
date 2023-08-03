import Title from '../UI/Title';
import MealItem from '../Meals/MealItem/MealItem';
import MyAccountPage from '../../Pages/MyAccountPage';
import WhishListContainer from './WhishList.style';

const WhishList = () => {
  return (
    <MyAccountPage>
      <div>
        <Title as="h1">Whishlist</Title>
        <WhishListContainer>
          <MealItem id="1" name="meal" description="desc" price={30} />
          <MealItem id="2" name="meal" description="desc" price={20} />
          <MealItem id="3" name="meal" description="desc" price={130} />
          <MealItem id="4" name="meal" description="desc" price={30} />
          <MealItem id="5" name="meal" description="desc" price={30} />
          <MealItem id="6" name="meal" description="desc" price={60} />
          <MealItem id="7" name="meal" description="desc" price={30} />
        </WhishListContainer>
      </div>
    </MyAccountPage>
  );
};

export default WhishList;
