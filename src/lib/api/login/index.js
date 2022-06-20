import AXIOS from '../index';

export const loginUser = (username, password) => AXIOS.post('login', {params: {username, password}}).then(res => res.data);