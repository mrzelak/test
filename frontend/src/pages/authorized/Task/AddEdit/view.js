import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import { initialSubTaskData } from './consts';
import styles from './styles';
import validationSchema from './validation';

const TaskAddEdit = ({ isEdit, onSubmit, initialValues }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      {({ values }) => (
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h1">Nowe zadanie</Typography>
            <Typography variant="h3" sx={styles.subtitle}>
              Podstawowe informacje
            </Typography>
            <Input name="name" label="Tytuł" sx={styles.input} />
            <Input name="description" label="Opis" sx={styles.input} />
            <Input
              name="date"
              label="Deadline"
              type="datetime-local"
              sx={styles.input}
            />
            <Typography variant="h3" sx={styles.subtitle}>
              Podzadania
            </Typography>
            <FieldArray
              name="subTasks"
              render={(arrayHelpers) => (
                <>
                  {map(values.subTasks, (_, index) => (
                    <Box sx={styles.subTaskWrapper} key={index}>
                      <Input
                        name={`subTasks.${index}.name`}
                        label="Tytuł podzadania"
                        sx={styles.input}
                      />
                      <DeleteIcon
                        onClick={() => arrayHelpers.remove(index)}
                        sx={styles.subTaskDeleteIcon}
                      />
                    </Box>
                  ))}
                  <Button
                    onClick={() =>
                      arrayHelpers.insert(
                        values.subTasks.length,
                        initialSubTaskData
                      )
                    }
                    size="small"
                    sx={styles.addSubTask}
                  >
                    Dodaj podzadanie
                  </Button>
                </>
              )}
            />
            <Button submit sx={{ margin: 'auto', marginTop: 20 }}>
              {isEdit ? 'Zatwierdź' : 'Utwórz'}
            </Button>
          </Box>
        </Form>
      )}
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
