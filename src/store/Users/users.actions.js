import { USERS_ACTION_TYPES } from "./users.action-types"

export const setUsers = (data) => ({type: USERS_ACTION_TYPES.SET_USERS, data });
export const fetchUsers = (page, count) => ({type: USERS_ACTION_TYPES.FETCH_USERS, data: {page, count}});
export const setUsersLoading = () => ({type: USERS_ACTION_TYPES.SET_USERS_LOADING });
export const setUsersError = (error) => ({type: USERS_ACTION_TYPES.SET_USERS_ERROR, data: error });