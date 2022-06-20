import { takeLatest,put,call } from "redux-saga/effects";
import { getNextBirthdaysData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";




function* fetchNextBirthdays(action){
    yield put(MAINPAGE_ACTIONS.setNextBirthdaysLoading())
    try{
        const nextBirthdays=yield call(getNextBirthdaysData,action.payload)
        yield put(MAINPAGE_ACTIONS.setNextBirthdays(nextBirthdays))
        // console.log(nextBirthdays)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setNextBirthdaysError(error.message))
    }
}

function* watchFetchNextBirthdays(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_NEXTBIRTHDAYS,fetchNextBirthdays)
}

export {
    watchFetchNextBirthdays
}