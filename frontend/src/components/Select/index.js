import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import { optionsShape } from './shapes';
import Select from './view';

const FormikSelect = ({ name, label, options, error, helperText, sx }) => (
  <FormikField
    name={name}
    label={label}
    options={options}
    sx={sx}
    error={error}
    helperText={helperText}
    component={Select}
  />
);

FormikSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: optionsShape.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
};

FormikSelect.defaultProps = {
  error: '',
  helperText: '',
  sx: {},
};

export default FormikSelect;
