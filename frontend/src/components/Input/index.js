import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import Input from './view';

const FormikInput = ({ name, label, error, helperText, sx }) => (
  <FormikField
    name={name}
    label={label}
    sx={sx}
    error={error}
    helperText={helperText}
    component={Input}
  />
);

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
};

FormikInput.defaultProps = {
  error: '',
  helperText: '',
  sx: {},
};

export default FormikInput;
