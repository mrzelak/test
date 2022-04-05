import React from 'react';
import { Form, Formik } from 'formik';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Switch',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik initialValues={{ switch: false }} onSubmit={() => {}}>
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  name: 'switch',
  label: 'My Switch',
};

export { Default };
