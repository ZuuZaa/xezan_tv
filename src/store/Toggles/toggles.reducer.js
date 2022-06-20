import { TOGGLES_ACTION_TYPES } from './toggles.action-types';

const togglesInit = {
  AddNewDialog: false,
  EditDialog: false,
  PasswordUpdateDialog: false,
  DeactivateUser: false,
  SearchForm: false,
  PasswordHidden: true,
  PasswordRepeatHidden: true,
  EditRoleDialog: false,
  DeleteRoleDialog: false,
  DetailsDialog: false,
  DeleteNotify: false,
  DeleteEmployee: false
}


export const togglesReducer = (store = togglesInit, action) => {
  switch (action.type) {
    case TOGGLES_ACTION_TYPES.ADD_NEW_DIALOG:
      return {
        ...store,
        AddNewDialog: !store.AddNewDialog
      };
    case TOGGLES_ACTION_TYPES.EDIT_DIALOG:
      return {
        ...store,
        EditDialog: !store.EditDialog
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_UPDATE_DIALOG:
      return {
        ...store,
        PasswordUpdateDialog: !store.PasswordUpdateDialog
      };
    case TOGGLES_ACTION_TYPES.DEACTIVATE_USER:
      return {
        ...store,
        DeactivateUser: !store.DeactivateUser
      };
    case TOGGLES_ACTION_TYPES.SEARCH_FORM:
      return {
        ...store,
        SearchForm: !store.SearchForm
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_HIDDEN:
      return {
        ...store,
        PasswordHidden: !store.PasswordHidden
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_REPEAT_HIDDEN:
      return {
        ...store,
        PasswordRepeatHidden: !store.PasswordRepeatHidden
      };
    case TOGGLES_ACTION_TYPES.DELETE_ROLE_DIALOG:
      return {
        ...store,
        DeleteRoleDialog: !store.DeleteRoleDialog
      };
    case TOGGLES_ACTION_TYPES.DETAILS_DIALOG:
      return {
        ...store,
        DetailsDialog: !store.DetailsDialog
      };
    case TOGGLES_ACTION_TYPES.DELETE_NOTIFY:
      return {
        ...store,
        DeleteNotify: !store.DeleteNotify
      };
    case TOGGLES_ACTION_TYPES.DELETE_EMPLOYEE:
      return {
        ...store,
        DeleteEmployee: !store.DeleteEmployee
      }
    default: return store;
  }
}