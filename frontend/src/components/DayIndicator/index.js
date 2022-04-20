import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import styles from './styles';
import { getDateText } from './utils';

const DayIndicator = ({ date }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={styles.circle} />
      <Box>{getDateText(date)}</Box>
    </Box>
  );
};

DayIndicator.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DayIndicator;
