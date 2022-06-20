import { takeLatest,put,call } from "redux-saga/effects";
import { getTripData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";



function* fetchTrip(action){
    yield put(MAINPAGE_ACTIONS.setTripLoading())
    try{
        const trip=yield call(getTripData,action.payload)
        yield put(MAINPAGE_ACTIONS.setTrip(trip))
        // console.log(trip)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setTripError(error.message))
    }
}

function* watchFetchTrip(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_TRIP,fetchTrip)
}

export {
    watchFetchTrip
}