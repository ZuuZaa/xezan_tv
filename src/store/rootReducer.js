import { combineReducers } from 'redux';
import { togglesReducer } from './Toggles/toggles.reducer';
import { userRolesReducer } from './UserRoles/userRoles.reducer';
import { usersReducer } from './Users/users.reducer';
import { mainPageReducers } from './MainPage/mainPage.reducer';
import { queriesReducer } from './Queries/queries.reducer';
import { employeesAllReducer } from './Employees/employees.reducer';

export default combineReducers({
  users: usersReducer,
  userRoles: userRolesReducer,
  mainPage:mainPageReducers,
  toggles: togglesReducer,
  queries: queriesReducer,
  employeesAll: employeesAllReducer,
})