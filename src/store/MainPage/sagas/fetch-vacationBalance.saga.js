import { takeLatest,put,call } from "redux-saga/effects";
import { getVacationBalanceData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";





function* fetchVacationBalance(action){
    yield put(MAINPAGE_ACTIONS.setVacationBalanceLoading())
    try{
        const vacationBalance=yield call(getVacationBalanceData,action.payload)
        yield put(MAINPAGE_ACTIONS.setVacationBalance(vacationBalance))
        // console.log(vacation)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setVacationBalanceError(error.message))
    }
}

function* watchFetchVacationBalance(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_VACATIONBALANCE,fetchVacationBalance)
}


export {

    watchFetchVacationBalance
}