import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/food.jpg';
import SlideStyled from './SlidePromo.style';

const SlidePromo = ({ src, alt, title, paragraph }) => {
  return (
    <SlideStyled>
      <Link to="/" />
      <img src={src || Image} alt={alt || 'Good Food Delivery Food'} />
      <div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </SlideStyled>
  );
};

export default SlidePromo;

SlidePromo.defaultProps = {
  src: null,
  alt: null,
};

SlidePromo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
