import React from 'react';
import { Form, Formik } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import validationSchema from './validation';

const TaskAddEdit = ({ onSubmit, initialValues }) => {
  const inputStyle = {
    margin: (theme) => theme.spacing(10, 0),
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h1" sx={{ marginBottom: 20 }}>
            Nowe zadanie
          </Typography>
          <Typography variant="h3">Podstawowe informacje</Typography>
          <Input name="name" label="Name" sx={inputStyle} />
          <Input name="description" label="Description" sx={inputStyle} />
          <Input
            name="date"
            label="Date"
            type="datetime-local"
            sx={inputStyle}
          />
          <Button submit sx={{ margin: 'auto', marginTop: 20 }}>
            Utwórz
          </Button>
        </Box>
      </Form>
    </Formik>
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
