import SidebarLinkItem from './SidebarLinkItem';
import SidebarContainer from './Sidebar.style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLinkItem title="Your Profile" link="./my-account" />
      <SidebarLinkItem title="Whishlist" link="./my-account/whishlist/" />
      <SidebarLinkItem title="Logout" link="" />
    </SidebarContainer>
  );
};

export default Sidebar;
