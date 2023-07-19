import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterItem from './FooterItem';
import Logo from '../UI/Logo';
import LogoMobile from '../UI/LogoMobile';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
  & h4 {
    margin: 0.5rem 0;
  }
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & > li {
    flex-basis: 50%;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      flex-basis: 25%;
    }
    &:nth-child(odd) {
      padding-right: 1rem;
    }
    &:nth-child(3) {
      @media (min-width: 768px) {
        padding-right: 1rem;
      }
    }
  }
`;

const FooterListItem = () => {
  return (
    <List>
      <li>
        <Link to="/">
          <LogoMobile />
          <Logo />
        </Link>
      </li>
      <FooterItem />
      <FooterItem />
      <FooterItem />
    </List>
  );
};

export default FooterListItem;
