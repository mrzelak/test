import React from 'react';
import { Form, Formik } from 'formik';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Chip from 'components/Chip';
import Input from 'components/Input';
import styles from './styles';

const ProfileView = ({ onSubmit, onDelete, tags }) => {
  return (
    <Box>
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
      <Box sx={{ marginTop: 20 }}>
        {map(tags, (entry) => (
          <Chip key={entry.id} title={entry.tagName} Icon={CloseIcon} onDelete={onDelete} />
        ))}
      </Box>
    </Box>
  );
};

ProfileView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default ProfileView;
