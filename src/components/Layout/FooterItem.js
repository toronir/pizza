import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;
`;

const FooterItem = () => {
  return (
    <li>
      <h4>Delivery</h4>
      <ul>
        <li>
          <NavLinkStyled to="./">Delivery</NavLinkStyled>
        </li>
      </ul>
    </li>
  );
};

export default FooterItem;
