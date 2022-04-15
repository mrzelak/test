import React from 'react';
import mockedTasks from 'mocks/tasks';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'DayTasks',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  date: new Date(),
  tasks: mockedTasks,
};

export { Default };
