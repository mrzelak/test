import React from 'react';
import axios from 'axios';
import useUnauthorizedHandler from 'hooks/useUnauthorizedHandler';
import ProfileView from './view';

const Profile = () => {
  const { handleUnauthorized } = useUnauthorizedHandler();

  const onSubmit = async (value) => {
    console.log(value);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/tag`,
        value
      );
      console.log(res);
    } catch (err) {
      handleUnauthorized(err);
    }
  };

  return <ProfileView onSubmit={onSubmit} />;
};

export default Profile;
