import { all, fork } from "redux-saga/effects";
import { watchFetchUsers } from './fetch-users.saga';
import { watchDeleteUsers } from './delete-users.saga';


function* usersSaga(){
    yield all([
        fork(watchFetchUsers),
        fork(watchDeleteUsers),
    ])
}

export {
    usersSaga
};