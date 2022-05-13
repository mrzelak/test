import React from 'react';
import noop from 'lodash/noop';
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

const Deletable = Template.bind({});
const Undeletable = Template.bind({});

Deletable.args = {
  title: 'Deletable',
  onDelete: noop,
  Icon: CloseIcon,
};

Undeletable.args = {
  title: 'Undeletable',
  onDelete: null,
};

export { Deletable, Undeletable };
