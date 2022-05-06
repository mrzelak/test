import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginView from './view';
import UserManager from 'managers/UserManager';

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/authentication/signin`,
        values
      );
      UserManager.setToken(`${res.data.type} ${res.data.token}`);
      navigate('application/tasks/list');
    } catch (err) {
      console.log(err);
    }
  };

  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
