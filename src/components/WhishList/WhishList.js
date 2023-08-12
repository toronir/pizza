import { useSelector } from 'react-redux';
import Title from '../UI/Title';
import MealItem from '../Meals/MealItem/MealItem';
import MyAccountPage from '../../Pages/MyAccountPage';
import WhishListContainer from './WhishList.style';

const WhishList = () => {
  const list = useSelector((state) => state.whishlist.products);
  const whislistItems = list.map((product) => {
    const { id, name, price, description } = product.item;
    return <MealItem key={id} id={id} name={name} description={description} price={price} />;
  });
  return (
    <MyAccountPage>
      <div>
        <Title as="h1">Whishlist</Title>
        <WhishListContainer>{whislistItems}</WhishListContainer>
      </div>
    </MyAccountPage>
  );
};

export default WhishList;
