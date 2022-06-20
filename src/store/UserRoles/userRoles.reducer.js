import { USER_ROLES_ACTION_TYPES } from './userRoles.action-types';

const userRolesInit = {
  data: {},
  loading: false,
  error: ''
}


export const userRolesReducer = (store = userRolesInit, action) => {
  switch (action.type) {
    case USER_ROLES_ACTION_TYPES.SET_USER_ROLES:
      return {
        ...store,
        ...userRolesInit,
        data: action.data
      };
    case USER_ROLES_ACTION_TYPES.SET_USER_ROLES_LOADING:
      return {
        ...store,
        ...userRolesInit,
        loading: true,
      }
    case USER_ROLES_ACTION_TYPES.SET_USER_ROLES_ERROR:
      return {
        ...store,
        ...userRolesInit,
        error: action.data
      }

    default: return store;
  }
}