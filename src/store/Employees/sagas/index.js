import { all, fork } from "redux-saga/effects";
import { watchFetchEmployeesAll } from "./fetch-employees.saga"; 
import { watchDeleteEmployeesAll } from './delete-employees.saga';


function* employeesAllSaga(){
    yield all([
        fork(watchFetchEmployeesAll),
        fork(watchDeleteEmployeesAll),
    ])
}

export {employeesAllSaga};