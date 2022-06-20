import {takeLatest, put, call} from 'redux-saga/effects';
import { USER_ROLES_ACTION_TYPES } from '../userRoles.action-types';
import { getUserRolesData } from '../../../lib/api/userRoles';
import { USER_ROLES_ACTIONS } from '../../UserRoles';

function* fetchUserRoles(action) {
    yield put(USER_ROLES_ACTIONS.setUserRolesLoading())
    const { page, count } = action.data;
    try{
        const userRoles = yield call(getUserRolesData, page, count)
        yield put(USER_ROLES_ACTIONS.setUserRoles(userRoles));

    }catch(error){
        yield put(USER_ROLES_ACTIONS.setUserRolesError(error.message))
    }
}


function* watchFetchUserRoles(){
    yield takeLatest(USER_ROLES_ACTION_TYPES.FETCH_USER_ROLES, fetchUserRoles)
}

export {
    watchFetchUserRoles
}