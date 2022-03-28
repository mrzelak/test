import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material';
import theme from './theme';

const AppThemeProvider = ({ children }) => {
  const MUITheme = createTheme(theme);

  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppThemeProvider;
