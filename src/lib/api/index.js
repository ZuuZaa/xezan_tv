import axios from 'axios';
export default axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://atl-backend.herokuapp.com/',
    timeout: 5000
  });