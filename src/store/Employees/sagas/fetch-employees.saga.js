import {takeLatest, put, call} from 'redux-saga/effects';
import { EMPLOYEES_ALL_ACTION_TYPES } from '../employees.action-types';
import { getEmployeesAllData } from '../../../lib/api/employees';
import { EMPLOYEES_ALL_ACTIONS } from '..'

function* fetchEmployeesAll(){
    yield put(EMPLOYEES_ALL_ACTIONS.setEmployeesAllLoading())
    try{
        const employeesAll = yield call(getEmployeesAllData)
        yield put(EMPLOYEES_ALL_ACTIONS.setEmployeesAll(employeesAll));

    }catch(error){
        yield put(EMPLOYEES_ALL_ACTIONS.setEmployeesAllError(error.message))
    }
}


function* watchFetchEmployeesAll(){
    yield takeLatest(EMPLOYEES_ALL_ACTION_TYPES.FETCH_EMPLOYEES_ALL, fetchEmployeesAll)
}

export {
    watchFetchEmployeesAll
}