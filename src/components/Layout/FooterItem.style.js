import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;
`;

export default NavLinkStyled;
