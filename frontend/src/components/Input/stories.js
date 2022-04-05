import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from './view';

export default {
  title: 'Input',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  label: 'My input',
};

export { Default };
