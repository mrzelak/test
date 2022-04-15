import React from 'react';
import { action } from '@storybook/addon-actions';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Check',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Checked = Template.bind({});

Default.args = {
  onClick: action('onClick'),
};

Checked.args = {
  ...Default.args,
  checked: true,
};

export { Default, Checked };
