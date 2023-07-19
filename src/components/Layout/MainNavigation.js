import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import auth from '../../firebase-config';
import { login, logout, selectUser } from '../../store/auth-slice';
import Button from '../UI/Button';
import Logo from '../UI/Logo';
import LogoMobile from '../UI/LogoMobile';

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
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
        <ListItem>
          <Button onClick={logoutUser}>Sign Out</Button>
        </ListItem>
      )}
    </List>
  );
};

export default MainNavigation;
