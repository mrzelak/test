import React from 'react';
import { Form, Formik } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import validationSchema from './validation';

const TaskAddEdit = ({ isEdit, onSubmit, initialValues }) => {
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
      enableReinitialize
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
            {isEdit ? 'Zatwierdź' : 'Utwórz'}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

TaskAddEdit.propTypes = {
  isEdit: PropTypes.bool,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }),
};

TaskAddEdit.defaultProps = {
  onSubmit: noop,
  initialValues: {},
  isEdit: false,
};

export default TaskAddEdit;
