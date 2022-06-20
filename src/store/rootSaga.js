import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './Users/sagas';
import { mainPageSaga } from './MainPage/sagas';
import { userRolesSaga } from './UserRoles/sagas';
import { queriesSaga } from './Queries/sagas';
import { employeesAllSaga } from './Employees/sagas';

export default function* rootSaga(){
    yield all([
        fork(usersSaga),
        fork(mainPageSaga),
        fork(userRolesSaga),
        fork(queriesSaga),
        fork(employeesAllSaga),
    ])
}