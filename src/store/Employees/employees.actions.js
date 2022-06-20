import { EMPLOYEES_ALL_ACTION_TYPES } from "./employees.action-types";

export const setEmployeesAll = (data) => ({type: EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL, data });
export const fetchEmployeesAll = (data) => ({type: EMPLOYEES_ALL_ACTION_TYPES.FETCH_EMPLOYEES_ALL, data });
export const setEmployeesAllLoading = () => ({type: EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL_LOADING });
export const setEmployeesAllError = (error) => ({type: EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL_ERROR, data: error });