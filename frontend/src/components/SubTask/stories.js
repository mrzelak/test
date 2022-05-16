import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'SubTask',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Done = Template.bind({});

Default.args = {
  title: 'Napisać recenzję zakupionych produktów',
  time: '16:00',
};

Done.args = {
  ...Default.args,
  isDone: true,
};

export { Default, Done };
