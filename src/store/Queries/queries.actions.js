import { QUERIES_ACTION_TYPES } from "./queries.action-types"

export const setQueries = (data) => ({type: QUERIES_ACTION_TYPES.SET_QUERIES, data });
export const fetchQueries = (page, count) => ({type: QUERIES_ACTION_TYPES.FETCH_QUERIES, data: {page, count}});
export const setQueriesLoading = () => ({type: QUERIES_ACTION_TYPES.SET_QUERIES_LOADING });
export const setQueriesError = (error) => ({type: QUERIES_ACTION_TYPES.SET_QUERIES_ERROR, data: error });