import AXIOS from '../index';

export const getUserRolesData = (page, count) => AXIOS.get('userroles', { params: {page, count} }).then(res=> res.data);
export const postNewUserRoles = (data) => AXIOS.post('userroles', data);
export const updateUserRoles = (id, data) => AXIOS.patch(`userroles/${id}`, data);
export const deleteUserRoles = id => AXIOS.delete(`userroles/${id}`);