import AXIOS from '../index';

export const getQueriesData = (page, count) => AXIOS.get('queries', { params: {page, count} }).then(res=> res.data);
