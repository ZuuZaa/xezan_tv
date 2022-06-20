import { MAINPAGE_ACTION_TYPES } from "./mainPage.action-types";
import { combineReducers } from "redux";
const mainPageInit = {
  lastQueries: {
    data: [],
    loading: false,
    error: "",
  },
  myQueries: {
    data: [],
    loading: false,
    error: "",
  },
  employees: {
    data: [],
    loading: false,
    error: "",
  },
  anniversary: {
    data: [],
    loading: false,
    error: "",
  },
  dayOff: {
    data: [],
    loading: false,
    error: "",
  },
  vacation: {
    data: [],
    loading: false,
    error: "",
  },
  nextBirtdays: {
    data: [],
    loading: false,
    error: "",
  },
  trip: {
    data: [],
    loading: false,
    error: "",
  },
  advertisements: {
    data: [],
    loading: false,
    error: "",
  },
  vacationBalance: {
    data: [],
    loading: false,
    error: "",
  },
};

//LASTQUERIES
export const lastQueriesReducer = (
  store = mainPageInit.lastQueries,
  action
) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_LASTQUERIES:
      return {
        ...store,
        ...mainPageInit.lastQueries,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_LASTQUERIES_LOADING:
      return {
        ...store,
        ...mainPageInit.lastQueries,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_LASTQUERIES_ERROR:
      return {
        ...store,
        ...mainPageInit.lastQueries,
        error: action.payload,
      };
    default:
      return store;
  }
};
//MYQUERIES
export const myQueriesReducer = (store = mainPageInit.myQueries, action) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_MYQUERIES:
      return {
        ...store,
        ...mainPageInit.myQueries,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_MYQUERIES_LOADING:
      return {
        ...store,
        ...mainPageInit.myQueries,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_MYQUERIES_ERROR:
      return {
        ...store,
        ...mainPageInit.myQueries,
        error: action.payload,
      };
    default:
      return store;
  }
};
//EMPLOYEES
export const employeesReducer = (store = mainPageInit.employees, action) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_EMPLOYEES:
      return {
        ...store,
        ...mainPageInit.employees,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_EMPLOYEES_LOADING:
      return {
        ...store,
        ...mainPageInit.employees,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_EMPLOYEES_ERROR:
      return {
        ...store,
        ...mainPageInit.employees,
        error: action.payload,
      };
    default:
      return store;
  }
};
//ANNIVERSARY
export const anniversaryReducer = (
  store = mainPageInit.anniversary,
  action
) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY:
      return {
        ...store,
        ...mainPageInit.anniversary,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY_LOADING:
      return {
        ...store,
        ...mainPageInit.anniversary,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY_ERROR:
      return {
        ...store,
        ...mainPageInit.anniversary,
        error: action.payload,
      };
    default:
      return store;
  }
};
//DAYOFF
export const dayOffReducer = (store = mainPageInit.dayOff, action) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_DAYOFF:
      return {
        ...store,
        ...mainPageInit.dayOff,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_DAYOFF_LOADING:
      return {
        ...store,
        ...mainPageInit.dayOff,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_DAYOFF_ERROR:
      return {
        ...store,
        ...mainPageInit.dayOff,
        error: action.payload,
      };
    default:
      return store;
  }
};
//VACATION
export const vacationReducer = (store = mainPageInit.vacation, action) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_VACATION:
      return {
        ...store,
        ...mainPageInit.vacation,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_VACATION_LOADING:
      return {
        ...store,
        ...mainPageInit.vacation,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_VACATION_ERROR:
      return {
        ...store,
        ...mainPageInit.vacation,
        error: action.payload,
      };
    default:
      return store;
  }
};
//NEXTBIRTHDAYS
export const nextBirthdaysReducer = (
  store = mainPageInit.nextBirtdays,
  action
) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS:
      return {
        ...store,
        ...mainPageInit.nextBirtdays,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS_LOADING:
      return {
        ...store,
        ...mainPageInit.nextBirtdays,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS_ERROR:
      return {
        ...store,
        ...mainPageInit.nextBirtdays,
        error: action.payload,
      };
    default:
      return store;
  }
};
//TRIP
export const nextTripReducer = (store = mainPageInit.trip, action) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_TRIP:
      return {
        ...store,
        ...mainPageInit.trip,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_TRIP_LOADING:
      return {
        ...store,
        ...mainPageInit.trip,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_TRIP_ERROR:
      return {
        ...store,
        ...mainPageInit.trip,
        error: action.payload,
      };
    default:
      return store;
  }
};
//ADVERTISEMENTS
export const advertisementsReducer = (
  store = mainPageInit.advertisements,
  action
) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS:
      return {
        ...store,
        ...mainPageInit.advertisements,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS_LOADING:
      return {
        ...store,
        ...mainPageInit.advertisements,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS_ERROR:
      return {
        ...store,
        ...mainPageInit.advertisements,
        error: action.payload,
      };
    default:
      return store;
  }
};
//VACATIONBALANCE
export const vacationBalanceReducer = (
  store = mainPageInit.vacationBalance,
  action
) => {
  switch (action.type) {
    case MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE:
      return {
        ...store,
        ...mainPageInit.vacationBalance,
        data: action.payload,
      };

    case MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE_LOADING:
      return {
        ...store,
        ...mainPageInit.vacationBalance,
        loading: true,
      };
    case MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE_ERROR:
      return {
        ...store,
        ...mainPageInit.vacationBalance,
        error: action.payload,
      };
    default:
      return store;
  }
};

export const mainPageReducers = combineReducers({
  lastQueries: lastQueriesReducer,
  myQueries: myQueriesReducer,
  employees: employeesReducer,
  anniversary: anniversaryReducer,
  dayOff: dayOffReducer,
  vacation: vacationReducer,
  nextBirthdays: nextBirthdaysReducer,
  trip: nextTripReducer,
  advertisements: advertisementsReducer,
  vacationBalance: vacationBalanceReducer,
});
