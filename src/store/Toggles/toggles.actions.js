import { TOGGLES_ACTION_TYPES } from "./toggles.action-types"

export const setAddNewDialog = () => ({type: TOGGLES_ACTION_TYPES.ADD_NEW_DIALOG });
export const setEditDialog = () => ({type: TOGGLES_ACTION_TYPES.EDIT_DIALOG });
export const setPasswordUpdateDialog = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_UPDATE_DIALOG });
export const setDeactivateUser = () => ({type: TOGGLES_ACTION_TYPES.DEACTIVATE_USER });
export const setSearchForm = () => ({type: TOGGLES_ACTION_TYPES.SEARCH_FORM });
export const setPasswordHidden = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_HIDDEN });
export const setPasswordRepeatHidden = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_REPEAT_HIDDEN });
export const setDeleteRoleDialog = () => ({type: TOGGLES_ACTION_TYPES.DELETE_ROLE_DIALOG });
export const setDetailsDialog = () => ({type: TOGGLES_ACTION_TYPES.DETAILS_DIALOG });
export const setDeleteNotify = () => ({type:TOGGLES_ACTION_TYPES.DELETE_NOTIFY});
export const setDeleteEmployee = () => ({type:TOGGLES_ACTION_TYPES.DELETE_EMPLOYEE});
