import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUnauthorizedHandler from 'hooks/useUnauthorizedHandler';
import ProfileView from './view';

const Profile = () => {
  const { handleUnauthorized } = useUnauthorizedHandler();
  const [tags, setTags] = useState([]);

  const onTagSubmit = async (value) => {
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

  const onTagDelete = async (tagId) => {
    console.log(tagId);
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tag/${tagId}`);
    } catch (err) {
      handleUnauthorized(err);
    }
  };

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
        const tags = res.data;
        setTags(tags);
        console.log(tags);
      } catch (err) {
        handleUnauthorized(err);
      }
    };
    getTags();
  }, []);

  return <ProfileView onSubmit={onTagSubmit} onDelete={onTagDelete} tags={tags} />;
};

export default Profile;
