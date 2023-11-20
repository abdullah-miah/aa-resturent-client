// useAxiosSecure.js

import {  useEffect, useContext } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
import { AuthContext } from '../providers/AuthProvider';




const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext); // Assuming you have a logOut method in AuthContext
  const navigate = useNavigate(); // Assuming you're using react-router-dom

  const axiosSecure = axios.create({
    baseURL: 'https://aa-resturent-server.vercel.app',
  });
  

  useEffect(()=>{
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  
    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          logOut();
          navigate('/login'); // Redirect to login page
        }
        return Promise.reject(error);
      }
    );
  },[logOut, navigate,axiosSecure])

  return [axiosSecure];
};

export default useAxiosSecure;
