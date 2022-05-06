import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Button from 'components/Button';

const AuthorizedLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box sx={{ width: 300, display: 'flex', flexDirection: 'column' }}>
        TODO przyciski
        <Button
          onClick={() => navigate('/application/tasks/list')}
          sx={{ width: 200, marginBottom: 20 }}
        >
          Lista
        </Button>
        <Button
          onClick={() => navigate('/application/tasks/add')}
          sx={{ width: 200, marginBottom: 20 }}
        >
          Dodaj zadanie
        </Button>
      </Box>
      <Box sx={{ flex: 1, padding: 50 }}>
        <Outlet />
      </Box>
      <Box sx={{ width: 100 }}>TODO User Avatar</Box>
    </Box>
  );
};

export default AuthorizedLayout;
