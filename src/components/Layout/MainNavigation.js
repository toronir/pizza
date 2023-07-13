import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import auth from '../../firebase-config';
import { login, logout, selectUser } from '../../store/auth-slice';

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
    <ul>
      <li>
        <NavLink to="/">Meals</NavLink>
      </li>
      {!currentUser && (
        <li>
          <NavLink to="authentication?state=login">Sign In</NavLink>
        </li>
      )}
      {currentUser && (
        <li>
          <button onClick={logoutUser}>Sign Out</button>
        </li>
      )}
    </ul>
  );
};

export default MainNavigation;
