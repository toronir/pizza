import { useDispatch, useSelector } from 'react-redux';
import { clearWhishlist } from '../../store/whishlist-slice';
import { sendWhishlistData } from '../../store/whislist-actions';
import Title from '../UI/Title';
import Button from '../UI/Button';
import MealItem from '../Meals/MealItem/MealItem';
import MyAccountPage from '../../Pages/MyAccountPage';
import { WhishListContainer, WhislistHeader, WhishListItemsContainer } from './WhishList.style';

const WhishList = () => {
  const list = useSelector((state) => state.whishlist.products);
  const dispatch = useDispatch();

  const handleClearWhishlist = () => {
    dispatch(clearWhishlist());
    dispatch(sendWhishlistData());
  };

  const whislistItems = list.map((product) => {
    const { id, name, category, price, description } = product.item;
    return (
      <MealItem
        key={id}
        id={id}
        name={name}
        category={category}
        description={description}
        price={price}
      />
    );
  });

  return (
    <MyAccountPage>
      <WhishListContainer>
        <WhislistHeader>
          <Title as="h1">Whishlist</Title>
          {list.length > 0 && <Button onClick={handleClearWhishlist}>Clear Whishlist</Button>}
        </WhislistHeader>
        {list.length === 0 && <p>Sorry, you have no products in your wishlist</p>}
        <WhishListItemsContainer>{whislistItems}</WhishListItemsContainer>
      </WhishListContainer>
    </MyAccountPage>
  );
};

export default WhishList;
