import {takeEvery} from 'redux-saga/effects';
import { EMPLOYEES_ALL_ACTION_TYPES } from '../employees.action-types';

function* deleteEmployeesAll(){
    yield console.log("deleteUsers was called");
}


function* watchDeleteEmployeesAll(){
    yield takeEvery(EMPLOYEES_ALL_ACTION_TYPES.DELETE_EMPLOYEES_ALL, deleteEmployeesAll)
}

export {watchDeleteEmployeesAll}