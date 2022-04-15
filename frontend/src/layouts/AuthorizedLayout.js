import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

const AuthorizedLayout = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <Box sx={{ width: 300 }}>TODO przyciski</Box>
      <Box sx={{ flex: 1, padding: 50 }}>
        <Outlet />
      </Box>
      <Box sx={{ width: 100 }}>TODO User Avatar</Box>
    </Box>
  );
};

export default AuthorizedLayout;
