import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/auth-slice';
import logoutUser from '../../utils/auth';

import SidebarLinkItem from './SidebarLinkItem';
import ArrowRight from '../../assets/img/icons/arrow-right.svg';
import SidebarContainer from './Sidebar.style';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    logoutUser();
    dispatch(setCurrentUser());
  };

  return (
    <SidebarContainer>
      <SidebarLinkItem title="Your Profile" link="./my-account" />
      <SidebarLinkItem title="Whishlist" link="./my-account/whishlist/" />
      <button onClick={handleLogoutUser}>
        Logout <img src={ArrowRight} alt="Logout button" aria-hidden="true" />
      </button>
    </SidebarContainer>
  );
};

export default Sidebar;
