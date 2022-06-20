import { takeLatest, put, call } from "redux-saga/effects";
import { getLastQueriesData } from "lib/api/mainMenu";
import { MAINPAGE_ACTIONS } from "..";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";

function* fetchLastQueries(action) {
  yield put(MAINPAGE_ACTIONS.setLastQueriesLoading());
  try {
    const lastQueries = yield call(getLastQueriesData, action.payload);
    yield put(MAINPAGE_ACTIONS.setLastQueries(lastQueries));
    // console.log(lastQueries)
  } catch (error) {
    yield put(MAINPAGE_ACTIONS.setLastQueriesError(error.message));
  }
}

function* watchFetchLastQueries() {
  yield takeLatest(MAINPAGE_ACTION_TYPES.FETCH_LASTQUERIES, fetchLastQueries);
}

export { watchFetchLastQueries };
