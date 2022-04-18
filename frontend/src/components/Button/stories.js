import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Button',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Small = Template.bind({});

Default.args = {
  children: 'Default',
};

Small.args = {
  size: 'small',
  children: 'Secondary',
};

export { Default, Small };
