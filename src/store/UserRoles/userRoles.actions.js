import { USER_ROLES_ACTION_TYPES } from "./userRoles.action-types"

export const setUserRoles = (data) => ({type: USER_ROLES_ACTION_TYPES.SET_USER_ROLES, data });
export const fetchUserRoles = (page, count) => ({type: USER_ROLES_ACTION_TYPES.FETCH_USER_ROLES, data: {page, count}});
export const setUserRolesLoading = () => ({type: USER_ROLES_ACTION_TYPES.SET_USER_ROLES_LOADING });
export const setUserRolesError = (error) => ({type: USER_ROLES_ACTION_TYPES.SET_USER_ROLES_ERROR, data: error });