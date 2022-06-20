import { takeLatest,put,call } from "redux-saga/effects";
import { getDayoffData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";





function* fetchDayOff(action){
    yield put(MAINPAGE_ACTIONS.setDayOffLoading())
    try{
        const dayOff=yield call(getDayoffData,action.payload)
        yield put(MAINPAGE_ACTIONS.setDayOff(dayOff))
        // console.log(dayOff)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setDayOffError(error.message))
    }
}

function* watchFetchDayOff(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_DAYOFF,fetchDayOff)
}
export {
    watchFetchDayOff
}