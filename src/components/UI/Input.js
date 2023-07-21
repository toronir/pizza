import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id} {...props}>
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

Input.propTypes = {
  input: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
