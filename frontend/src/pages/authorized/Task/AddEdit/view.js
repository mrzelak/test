import React from 'react';
import { Form, Formik } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';
import { optionsShape } from 'components/Select/shapes';
import validationSchema from './validation';

const TaskAddEdit = ({ isEdit, onSubmit, availableTasks, initialValues }) => {
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
          <Select
            name="previousTask"
            label="Zadanie poprzedzające"
            options={availableTasks}
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
  availableTasks: optionsShape,
};

TaskAddEdit.defaultProps = {
  onSubmit: noop,
  initialValues: {},
  isEdit: false,
  availableTasks: [],
};

export default TaskAddEdit;
