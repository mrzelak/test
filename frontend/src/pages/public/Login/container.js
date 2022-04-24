import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginView from './view';

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    let res;
    try {
      res = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, {
        username: values.name,
        password: values.password,
      });
    } catch (err) {
      console.log('ERROR CATCHED!');
    }

    if (res) {
      console.log(res);
      navigate('application/tasks/list');
    }
  };

  return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
