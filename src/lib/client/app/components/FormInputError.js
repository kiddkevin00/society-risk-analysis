import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormInputError = ({ visible, errorMessage }) => {
  const className = cx('error_container', {
    visible,
    invisible: !visible,
  });

  return (
    <div className={className}>
      <span>{errorMessage}</span>
    </div>
  );
};

FormInputError.propTypes = {
  visible: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

FormInputError.defaultProps = {
  errorMessage: 'Unknown error',
};

export { FormInputError as default };
