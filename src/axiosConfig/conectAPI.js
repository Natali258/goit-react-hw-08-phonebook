import axios from 'axios';

export const conectAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  conectAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = token => {
  conectAPI.defaults.headers.common.Authorization = '';
};
