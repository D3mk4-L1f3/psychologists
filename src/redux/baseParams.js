import axios from 'axios';

const baseUrl = 'https://psychologists-backend.onrender.com';

const baseParams = axios.create({
  baseURL: baseUrl + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setToken = token => {
  baseParams.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  baseParams.defaults.headers.common.Authorization = '';
};

export { baseParams, setToken, removeToken };
