import { Link } from 'react-router-dom';
import FooterItem from './FooterItem';
import Logo from '../UI/Logo';
import LogoMobile from '../UI/LogoMobile';
import List from './FooterListItem.style';

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
