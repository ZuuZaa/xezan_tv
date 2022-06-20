import AXIOS from '../index';

export const getUserData = () => AXIOS.get('users').then(res=> res.data);
export const postNewUser = (data) => AXIOS.post('users', data);
export const updateUser = (id, data) => AXIOS.patch(`users/${id}`, data);
export const deleteUser = id => AXIOS.delete(`users/${id}`);