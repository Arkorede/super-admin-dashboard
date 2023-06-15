import axios from 'axios';
import React from 'react';

// const token = localStorage.getItem('access_token');

const instance = axios.create({
  baseURL: 'http://cred-bevy-api-env-1.eba-6rhxrtvp.eu-north-1.elasticbeanstalk.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  },
});

const handleErrors = (error) => {
  console.log(error.response.data);
};

instance.interceptors.response.use(
  (response) => response,
  (error) => handleErrors(error)
);

export default instance;

