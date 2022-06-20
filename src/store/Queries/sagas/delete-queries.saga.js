import {takeEvery} from 'redux-saga/effects';
import { QUERIES_ACTION_TYPES } from '../queries.action-types';

function* deleteQueries(){
    yield console.log("deleteQueries was called");
}


function* watchDeleteQueries(){
    yield takeEvery(QUERIES_ACTION_TYPES.DELETE_QUERIES, deleteQueries)
}

export {
    watchDeleteQueries
}