import {takeLatest, put, call} from 'redux-saga/effects';
import { QUERIES_ACTION_TYPES } from '../queries.action-types';
import { getQueriesData } from '../../../lib/api/queries';
import { QUERIES_ACTIONS } from '..'

function* fetchQueries(action){
    yield put(QUERIES_ACTIONS.setQueriesLoading())
    const { page, count } = action.data;
    try{
        const queries = yield call(getQueriesData, page, count)
        yield put(QUERIES_ACTIONS.setQueries(queries));

    }catch(error){
        yield put(QUERIES_ACTIONS.setQueriesError(error.message))
    }
}


function* watchFetchQueries(){
    yield takeLatest(QUERIES_ACTION_TYPES.FETCH_QUERIES, fetchQueries)
}

export {
    watchFetchQueries
}