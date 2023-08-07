import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import auth from '../../firebase-config';
import { login, logout, selectUser } from '../../store/auth-slice';
// import Button from '../UI/Button';
import Logo from '../UI/Logo';
import LogoMobile from '../UI/LogoMobile';
import userIcon from '../../assets/img/icons/user.svg';
import { List, ListItem, LoggedItems } from './MainNavigation.style';

const MainNavigation = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth)
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          }),
        );
      else dispatch(logout());
    });
  }, [dispatch]);

  const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
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
              <button onClick={logoutUser}>Sign Out</button>
            </li>
          </ul>
        </LoggedItems>
      )}
    </List>
  );
};

export default MainNavigation;
