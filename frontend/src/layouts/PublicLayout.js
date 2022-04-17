import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

const PublicLayout = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
