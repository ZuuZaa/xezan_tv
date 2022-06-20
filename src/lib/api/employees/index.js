import AXIOS from '../index';

export const getEmployeesAllData = () => AXIOS.get('employeesAll').then(res=> res.data);
