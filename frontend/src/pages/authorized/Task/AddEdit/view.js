import React from 'react';
import { Form, Formik } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';
import Switch from 'components/Switch';
import { selectOptions } from './consts';

const TaskAddEdit = ({ onSubmit, initialValues }) => {
  // TODO wykorzystać isEdit np do zmiany wysyłanego requesta w onSubmit
  const inputStyle = {
    margin: (theme) => theme.spacing(10, 0),
  };

  return (
    <Box>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form>
          <Input name="test1" label="Testowe pole1" sx={inputStyle} />
          <Input name="test2" label="Testowe pole2" sx={inputStyle} />
          <Switch name="switch" label="Testowy switch" sx={inputStyle} />
          <Select
            name="select"
            label="Testowy Select"
            options={selectOptions}
            sx={inputStyle}
          />
          <Button submit>Zatwierdź</Button>
        </Form>
      </Formik>
    </Box>
  );
};

TaskAddEdit.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    test1: PropTypes.string,
    test2: PropTypes.string,
  }),
};

TaskAddEdit.defaultProps = {
  onSubmit: noop,
  initialValues: {},
};

export default TaskAddEdit;
