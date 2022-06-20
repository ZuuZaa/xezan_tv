import { takeLatest,put,call } from "redux-saga/effects";
import {getAdvertisementsData} from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";



function* fetchAdvertisements(action){
    yield put(MAINPAGE_ACTIONS.setAdvertisementsLoading())
    try{
        const Advertisements=yield call(getAdvertisementsData,action.payload)
        yield put(MAINPAGE_ACTIONS.setAdvertisements(Advertisements))
        // console.log(vacation)
    }
    catch(error){
        yield put(MAINPAGE_ACTIONS.setAdvertisementsError(error.message))
    }
}

function* watchFetchAdvertisements(){
    yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_ADVERTISEMENTS,fetchAdvertisements)
}

export{
    watchFetchAdvertisements
}