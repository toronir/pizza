import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import auth from '../../firebase-config';
import { login, logout, selectUser } from '../../store/auth-slice';
import Button from '../UI/Button';

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  & li {
    margin-right: 1rem;
    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};
      display: block;
      font-weight: 600;
      padding: 0.25rem 2rem;
      border-radius: 2rem;
      border: 1px solid ${({ theme }) => theme.color.lightGreen};
      background-color: ${({ theme }) => theme.color.lightGreen};
      cursor: pointer;
      @media (min-width: 768px) {
        display: inline-block;
        width: auto;
      }
    }
  }
`;

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
        <NavLink to="/">Meals</NavLink>
      </li>
      {!currentUser && (
        <li>
          <NavLink to="authentication?state=login">Sign In</NavLink>
        </li>
      )}
      {currentUser && (
        <li>
          <Button onClick={logoutUser}>Sign Out</Button>
        </li>
      )}
    </List>
  );
};

export default MainNavigation;
