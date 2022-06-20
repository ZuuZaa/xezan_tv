import { takeLatest,put,call } from "redux-saga/effects";
import { getAnniversaryData } from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";


function* fetchAnniversary(action){
    yield put(MAINPAGE_ACTIONS.setAnniversaryLoading())
    try{
        const anniversary=yield call(getAnniversaryData,action.payload)
        yield put(MAINPAGE_ACTIONS.setAnniversary(anniversary))
        // console.log(anniversary)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setAnniversaryError(error.message))
    }
}

function* watchFetchAnniversary(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_ANNIVERSARY,fetchAnniversary)
}

export {
    watchFetchAnniversary
}