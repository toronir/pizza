import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoutUser from '../../utils/auth';
import { setCurrentUser } from '../../store/auth-slice';

import Logo from '../UI/Logo';
import LogoMobile from '../UI/LogoMobile';
import userIcon from '../../assets/img/icons/user.svg';
import { List, ListItem, LoggedItems } from './MainNavigation.style';

const MainNavigation = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    logoutUser();
    dispatch(setCurrentUser());
  };

  return (
    <List>
      <li>
        <NavLink to="/">
          <LogoMobile />
          <Logo />
        </NavLink>
      </li>
      {!currentUser && (
        <ListItem>
          <NavLink to="authentication?state=login">Sign In</NavLink>
        </ListItem>
      )}
      {currentUser && (
        <LoggedItems>
          <img src={userIcon} alt="User icon" />
          <ul>
            <li>
              <NavLink to="/my-account">My account</NavLink>
            </li>
            <li>
              <button onClick={handleLogoutUser}>Sign Out</button>
            </li>
          </ul>
        </LoggedItems>
      )}
    </List>
  );
};

export default MainNavigation;
