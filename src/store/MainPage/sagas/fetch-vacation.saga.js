import { takeLatest,put,call } from "redux-saga/effects";
import { getVacationData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";

function* fetchVacation(action){
    yield put(MAINPAGE_ACTIONS.setVacationLoading())
    try{
        const vacation=yield call(getVacationData,action.payload)
        yield put(MAINPAGE_ACTIONS.setVacation(vacation))
        // console.log(vacation)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setVacationError(error.message))
    }
}

function* watchFetchVacation(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_VACATION,fetchVacation)
}
export {
    watchFetchVacation
}