import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterItem from './FooterItem';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & > li {
    flex-basis: 25%;
  }
`;

const FooterListItem = () => {
  return (
    <List>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <FooterItem />
      <FooterItem />
      <FooterItem />
    </List>
  );
};

export default FooterListItem;
