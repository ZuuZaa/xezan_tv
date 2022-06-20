import {takeLatest, put, call} from 'redux-saga/effects';
import { USERS_ACTION_TYPES } from '../users.action-types';
import { getUserData } from '../../../lib/api/users';
import { USERS_ACTIONS } from '../../Users'

function* fetchUsers(action){
    yield put(USERS_ACTIONS.setUsersLoading())
    const { page, count } = action.data;
    try{
        const users = yield call(getUserData, page, count)
        yield put(USERS_ACTIONS.setUsers(users));

    }catch(error){
        yield put(USERS_ACTIONS.setUsersError(error.message))
    }
}


function* watchFetchUsers(){
    yield takeLatest(USERS_ACTION_TYPES.FETCH_USERS, fetchUsers)
}

export {
    watchFetchUsers
}