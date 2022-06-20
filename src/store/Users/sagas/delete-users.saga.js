import { takeEvery } from 'redux-saga/effects';
import { USERS_ACTION_TYPES } from '../users.action-types';

function* deleteUsers(){
    yield console.log("deleteUsers was called");
}


function* watchDeleteUsers(){
    yield takeEvery(USERS_ACTION_TYPES.DELETE_USERS, deleteUsers)
}

export {
    watchDeleteUsers
}