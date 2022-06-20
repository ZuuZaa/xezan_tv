import { takeLatest,put,call } from "redux-saga/effects";
import { getMyQueiresData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";

function* fetchMyQueries(action){
    yield put(MAINPAGE_ACTIONS.setMyQueriesLoading())
    try{
        const myQueries=yield call(getMyQueiresData,action.payload)
        yield put(MAINPAGE_ACTIONS.setMyQueries(myQueries))
        // console.log(myQueries)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setMyQueriesError(error.message))
    }
}

function* watchFetchMyQueries(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_MYQUERIES,fetchMyQueries)
}

export {
    watchFetchMyQueries
}