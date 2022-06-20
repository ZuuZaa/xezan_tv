import { QUERIES_ACTION_TYPES } from './queries.action-types';

const queriesInit = {
  data: {},
  loading: false,
  error: ''
}


export const queriesReducer = (store = queriesInit, action) => {
  switch (action.type) {
    case QUERIES_ACTION_TYPES.SET_QUERIES:
      return {
        ...store,
        ...queriesInit,
        data: action.data
      };
    case QUERIES_ACTION_TYPES.SET_QUERIES_LOADING:
      return {
        ...store,
        ...queriesInit,
        loading: true,
      }
    case QUERIES_ACTION_TYPES.SET_QUERIES_ERROR:
      return {
        ...store,
        ...queriesInit,
        error: action.data
      }

    default: return store;
  }
}