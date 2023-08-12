import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowRight from '../../assets/img/icons/arrow-right.svg';

const SidebarLinkItem = ({ title, link, onClick = null }) => {
  return (
    <NavLink to={`/${link}`} onClick={onClick}>
      {title} <img src={ArrowRight} alt="Go to page" aria-hidden="true" />
    </NavLink>
  );
};

export default SidebarLinkItem;

SidebarLinkItem.defaultProps = {
  onClick: null,
};

SidebarLinkItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
