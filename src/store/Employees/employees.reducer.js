import { EMPLOYEES_ALL_ACTION_TYPES } from './employees.action-types';

const employeesInit = {
  data: {},
  loading: false,
  error: ''
}


export const employeesAllReducer = (store = employeesInit, action) => {
  switch (action.type) {
    case EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL:
      return {
        ...store,
        ...employeesInit,
        data: action.data
      };
    case EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL_LOADING:
      return {
        ...store,
        ...employeesInit,
        loading: true,
      }
    case EMPLOYEES_ALL_ACTION_TYPES.SET_EMPLOYEES_ALL_ERROR:
      return {
        ...store,
        ...employeesInit,
        error: action.data
      }

    default: return store;
  }
}