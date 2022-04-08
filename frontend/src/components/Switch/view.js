import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MUISwitch from '@mui/material/Switch';

const Switch = ({ field, label, sx, ...props }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
    <MUISwitch
      checked={field.value}
      sx={{ marginRight: 1 }}
      inputProps={{ ...field, ...props }}
    />
    <Box sx={{ marginBottom: 0.5 }}>{label}</Box>
  </Box>
);

Switch.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  sx: PropTypes.objectOf(PropTypes.any),
};

Switch.defaultProps = {
  sx: {},
};

export default Switch;
