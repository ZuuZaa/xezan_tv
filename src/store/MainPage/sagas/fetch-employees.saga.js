import { takeLatest, put, call } from "redux-saga/effects";
import { getEmployeesData } from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";

function* fetchEmployees(action) {
  yield put(MAINPAGE_ACTIONS.setEmployeesLoading());
  try {
    const employees = yield call(getEmployeesData, action.payload);
    yield put(MAINPAGE_ACTIONS.setEmployees(employees));
    // console.log(employees)
  } catch (error) {
    yield put(MAINPAGE_ACTIONS.setEmployeesError(error.message));
  }
}

function* watchFetchEmployees() {
  yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_EMPLOYEES, fetchEmployees);
}

export { watchFetchEmployees };
