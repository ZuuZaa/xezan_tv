import { all, fork } from "redux-saga/effects";
import { watchFetchUserRoles } from './fetch-userRoles.saga';
import { watchDeleteUserRoles } from './delete-userRoles.saga';


function* userRolesSaga(){
    yield all([
        fork(watchFetchUserRoles),
        fork(watchDeleteUserRoles),
    ])
}

export {
    userRolesSaga
};