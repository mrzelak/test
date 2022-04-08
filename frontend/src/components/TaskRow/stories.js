import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'TaskRow',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Done = Template.bind({});
const Warning = Template.bind({});
const Error = Template.bind({});

Default.args = {
  title: 'Napisać recenzję zakupionych produktów',
  time: '16:00',
};

Done.args = {
  ...Default.args,
  isDone: true,
};

Warning.args = {
  ...Default.args,
  severity: 'warning',
};

Error.args = {
  ...Default.args,
  severity: 'error',
};

export { Default, Done, Warning, Error };
