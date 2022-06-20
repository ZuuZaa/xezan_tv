import { MAINPAGE_ACTION_TYPES } from "./mainPage.action-types";

//LASTQUERIES
export const setLastQueries=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_LASTQUERIES,payload:data})
export const fetchLastQueries=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_LASTQUERIES})
export const setLastQueriesLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_LASTQUERIES_LOADING})
export const setLastQueriesError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_LASTQUERIES_ERROR,payload: error})

//MYQUERIES
export const setMyQueries=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_MYQUERIES,payload:data})
export const fetchMyQueries=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_MYQUERIES})
export const setMyQueriesLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_MYQUERIES_LOADING})
export const setMyQueriesError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_MYQUERIES_ERROR,payload: error})


//EMPLOYEES
export const setEmployees=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_EMPLOYEES,payload:data})
export const fetchEmployees=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_EMPLOYEES})
export const setEmployeesLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_EMPLOYEES_LOADING})
export const setEmployeesError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_EMPLOYEES_ERROR,payload: error})

//ANNIVERSARY
export const setAnniversary=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY,payload:data})
export const fetchAnniversary=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_ANNIVERSARY})
export const setAnniversaryLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY_LOADING})
export const setAnniversaryError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_ANNIVERSARY_ERROR,payload: error})

//DAYOFF
export const setDayOff=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_DAYOFF,payload:data})
export const fetchDayOff=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_DAYOFF})
export const setDayOffLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_DAYOFF_LOADING})
export const setDayOffError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_DAYOFF_ERROR,payload: error})

//VACATION
export const setVacation=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_VACATION,payload:data})
export const fetchVacation=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_VACATION})
export const setVacationLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_VACATION_LOADING})
export const setVacationError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_VACATION_ERROR,payload: error})

//NEXTBIRTHDAYS
export const setNextBirthdays=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS,payload:data})
export const fetchNextBirthdays=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_NEXTBIRTHDAYS})
export const setNextBirthdaysLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS_LOADING})
export const setNextBirthdaysError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_NEXTBIRTHDAYS_ERROR,payload: error})

//TRIP
export const setTrip=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_TRIP,payload:data})
export const fetchTrip=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_TRIP})
export const setTripLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_TRIP_LOADING})
export const setTripError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_TRIP_ERROR,payload: error})

//ADVERTISEMENTS
export const setAdvertisements=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS,payload:data})
export const fetchAdvertisements=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_ADVERTISEMENTS})
export const setAdvertisementsLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS_LOADING})
export const setAdvertisementsError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_ADVERTISEMENTS_ERROR,payload: error})

//VACATIONBALANCE
export const setVacationBalance=(data)=>({type:MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE,payload:data})
export const fetchVacationBalance=()=>({type:MAINPAGE_ACTION_TYPES.FETCH_VACATIONBALANCE})
export const setVacationBalanceLoading=()=>({type:MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE_LOADING})
export const setVacationBalanceError=(error)=>({type:MAINPAGE_ACTION_TYPES.SET_VACATIONBALANCE_ERROR,payload: error})
