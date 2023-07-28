import PropTypes from 'prop-types';
import Pargraph from './Alert.style';

const Alert = ({ message, type = 'error' }) => {
  return <Pargraph type={type}>{message}</Pargraph>;
};

Alert.defaultProps = {
  type: PropTypes.string,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Alert;
