import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserManager from 'managers/UserManager';
import LoginView from './view';

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/authentication/signin`,
        values
      );
      const bearerToken = `${res.data.type} ${res.data.token}`;
      UserManager.setToken(bearerToken);
      navigate('application/tasks/list');
    } catch (err) {
      console.log(err);
    }
  };

  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
