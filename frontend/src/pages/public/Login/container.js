import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginView from './view';

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log('Login: ', values);
    navigate('application/tasks/list');
  };

  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
