import AXIOS  from "../index";

export const getLastQueriesData=()=>AXIOS.get('lastQueries').then(res=>res.data);
export const getMyQueiresData=()=>AXIOS.get('myQueries').then(res=>res.data)
export const getEmployeesData =()=>AXIOS.get('employees').then(res=>res.data);
export const getAnniversaryData=() =>AXIOS.get('anniversary').then(res=>res.data);
export const getDayoffData=()=>AXIOS.get('dayOff').then(res=>res.data)
export const getVacationData=()=>AXIOS.get('vacation').then(res=>res.data)
export const getNextBirthdaysData=()=>AXIOS.get('birthday').then(res=>res.data)
export const getTripData=()=>AXIOS.get('trip').then(res=>res.data)
export const getAdvertisementsData=()=>AXIOS.get('advertisements').then(res=>res.data)
export const getVacationBalanceData=()=>AXIOS.get("vacationBalance").then(res=>res.data)