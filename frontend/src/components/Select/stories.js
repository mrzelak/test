import React from 'react';
import { Form, Formik } from 'formik';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Select',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik initialValues={{ select: '' }} onSubmit={() => {}}>
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});
const Error = Template.bind({});

Default.args = {
  label: 'My select',
  name: 'select',
  options: [
    {
      label: 'Co tydzień',
      value: 'value1',
    },
    {
      label: 'Co dwa tygodnie',
      value: 'value2',
    },
  ],
};

Error.args = {
  ...Default.args,
  error: 'Please fill the field!',
};

export { Default, Error };
