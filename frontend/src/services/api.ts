import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.7:5555/api/',
});

export default api;
