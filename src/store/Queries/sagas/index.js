import { all, fork } from "redux-saga/effects";
import { watchFetchQueries } from './fetch-queries.saga';
import { watchDeleteQueries } from './delete-queries.saga';


function* queriesSaga(){
    yield all([
        fork(watchFetchQueries),
        fork(watchDeleteQueries),
    ])
}

export {
    queriesSaga
};