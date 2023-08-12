import { useDispatch, useSelector } from 'react-redux';
import { getWhishlistData } from '../../store/whislist-actions';
import SidebarLinkItem from './SidebarLinkItem';
import SidebarContainer from './Sidebar.style';

const Sidebar = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const userId = currentUser ? currentUser.uid : null;
  const dispatch = useDispatch();

  const getWhishlist = () => dispatch(getWhishlistData(userId));
  return (
    <SidebarContainer>
      <SidebarLinkItem title="Whishlist" link="./my-account/whishlist/" onClick={getWhishlist} />
      <SidebarLinkItem title="Update Profile" link="./my-account/my-data" />
      <SidebarLinkItem title="Logout" link="" />
    </SidebarContainer>
  );
};

export default Sidebar;
