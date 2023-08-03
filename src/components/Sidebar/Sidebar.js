import SidebarLinkItem from './SidebarLinkItem';
import SidebarContainer from './Sidebar.style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* <SidebarLinkItem title="Orders" link="" /> */}
      <SidebarLinkItem title="Whishlist" link="./my-account/whishlist/" />
      <SidebarLinkItem title="Update Profile" link="./my-account/my-data" />
      <SidebarLinkItem title="Logout" link="" />
    </SidebarContainer>
  );
};

export default Sidebar;
