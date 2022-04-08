import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import Switch from './view';

const FormikSwitch = ({ name, label, sx }) => (
  <FormikField name={name} label={label} sx={sx} component={Switch} />
);

FormikSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

FormikSwitch.defaultProps = {
  sx: {},
};

export default FormikSwitch;
