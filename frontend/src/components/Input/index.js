import React from 'react';
import { Field as FormikField } from 'formik';
import InputView from './view';

const Input = (props) => <FormikField {...props} component={InputView} />;

export default Input;
