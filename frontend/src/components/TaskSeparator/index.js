import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import styles from './styles';

const TaskSeparator = ({ value }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={styles.circle} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={styles.circle} />
        <Box>{value}</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={styles.circle} />
      </Box>
    </Box>
    
  );
};



export default TaskSeparator;
