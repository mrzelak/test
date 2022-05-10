import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Chip as MUIChip } from '@mui/material';
import getStyles from './styles';

const Chip = ({ title, Icon, onDelete, }) => {
  const styles = getStyles();

  return (
    <MUIChip
      label={title}
      onDelete={onDelete}
      variant="contained"
      sx={{ ...styles.root}}
      deleteIcon={<Icon  sx={{ ...styles.icon}}/>}
    />
  );
};

Chip.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  onDelete: PropTypes.func,
};

Chip.defaultProps = {
  title: '',
  onDelete: noop,
};

export default Chip;
