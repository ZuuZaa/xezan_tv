import {takeEvery} from 'redux-saga/effects';
import { USER_ROLES_ACTION_TYPES } from '../userRoles.action-types';

function* deleteUserRoles(){
    yield console.log("deleteUserRoles was called");
}


function* watchDeleteUserRoles(){
    yield takeEvery(USER_ROLES_ACTION_TYPES.DELETE_USER_ROLES, deleteUserRoles)
}

export {
    watchDeleteUserRoles
}