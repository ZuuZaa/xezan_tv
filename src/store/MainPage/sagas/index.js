import { all,fork } from "redux-saga/effects";
import { watchFetchLastQueries } from "./fetch-lastQueries.saga";
import { watchFetchMyQueries } from "./fetch-myQueries.saga";
import {watchFetchEmployees} from "./fetch-employees.saga";
import { watchFetchAnniversary } from "./fetch-anniversary.saga";
import { watchFetchDayOff } from "./fetch-dayOff.saga";
import { watchFetchVacation } from "./fetch-vacation.saga";
import { watchFetchNextBirthdays } from "./fetch-nextBirthdays.saga";
import { watchFetchTrip } from "./fetch-trip.saga";
import { watchFetchAdvertisements } from "./fetch-advertisements.saga";
import { watchFetchVacationBalance} from "./fetch-vacationBalance.saga";

function* mainPageSaga(){
    yield all([
        fork(watchFetchLastQueries),
        fork(watchFetchMyQueries),
        fork(watchFetchEmployees),
        fork(watchFetchAnniversary),
        fork(watchFetchDayOff),
        fork(watchFetchVacation),
        fork(watchFetchNextBirthdays),
        fork(watchFetchTrip),
        fork(watchFetchAdvertisements),
        fork(watchFetchVacationBalance)
    ])
}
export {
    mainPageSaga
}