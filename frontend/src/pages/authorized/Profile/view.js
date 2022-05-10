import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './styles';

const ProfileView = ({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ tagName: '' }}
      enableReinitialize
    >
      <Form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h1">Preferencje</Typography>
          <Typography variant="h3" sx={styles.subtitle}>
            Tagi
          </Typography>
          <Box sx={styles.inputWrapper}>
            <Input name="tagName" label="Nazwa taga" sx={styles.input} />
            <Button submit sx={{ margin: 'auto' }}>
              Dodaj
            </Button>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

ProfileView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileView;
