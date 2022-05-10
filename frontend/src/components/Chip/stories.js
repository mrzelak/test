import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Chip',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  title: 'Default',
  Icon: CloseIcon,
};

export { Default };