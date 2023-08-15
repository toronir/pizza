import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowRight from '../../assets/img/icons/arrow-right.svg';

const SidebarLinkItem = ({ title, link }) => {
  return (
    <NavLink to={`/${link}`}>
      {title} <img src={ArrowRight} alt="Go to page" aria-hidden="true" />
    </NavLink>
  );
};

export default SidebarLinkItem;

SidebarLinkItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
