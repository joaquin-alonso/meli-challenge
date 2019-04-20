import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_MELI_API || 'http://localhost:80/'
});

export default instance;
