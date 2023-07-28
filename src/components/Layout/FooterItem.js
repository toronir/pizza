import NavLinkStyled from './FooterItem.style';

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
