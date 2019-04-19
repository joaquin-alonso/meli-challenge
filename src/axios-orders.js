import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reacting-burger-77d19.firebaseio.com/'
});

export default instance;
