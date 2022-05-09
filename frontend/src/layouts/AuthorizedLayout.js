import React from 'react';
import { matchPath, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Box } from '@mui/system';
import AccountButton from 'components/AccountButton';
import MenuButton from 'components/MenuButton';

const AuthorizedLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        padding: 20,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: 300,
          display: 'flex',
          flexDirection: 'column',
          rowGap: 20,
        }}
      >
        <MenuButton
          title="Lista"
          Icon={FormatListBulletedIcon}
          active={matchPath('/application/tasks/list', pathname) !== null}
          onClick={() => navigate('/application/tasks/list')}
        />
        <MenuButton title="Kalendarz" Icon={EventAvailableIcon} />
        <MenuButton
          title="Dodaj zadanie"
          Icon={AddTaskIcon}
          active={matchPath('/application/tasks/add', pathname) !== null}
          onClick={() => navigate('/application/tasks/add')}
        />
      </Box>
      <Box sx={{ flex: 1, padding: 50 }}>
        <Outlet />
      </Box>
      <Box sx={{ width: 100 }}>
        <AccountButton />
      </Box>
    </Box>
  );
};

export default AuthorizedLayout;
