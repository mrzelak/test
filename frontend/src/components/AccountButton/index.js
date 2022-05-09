import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box } from '@mui/system';
import styles from './styles';

const AccountButton = ({ active, onClick }) => {
  return (
    <Box
      sx={{ ...styles.root, ...(active && styles.active) }}
      onClick={onClick}
    >
      <PersonOutlineIcon
        sx={{ ...styles.icon, ...(active && styles.activeIcon) }}
      />
    </Box>
  );
};

AccountButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

AccountButton.defaultProps = {
  active: false,
  onClick: noop,
};

export default AccountButton;
