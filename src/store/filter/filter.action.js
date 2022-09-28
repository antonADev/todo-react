import { FILTERED_ACTION_TYPES } from './filter.type';

export const showFilter = (filter) => {
  return { type: FILTERED_ACTION_TYPES.SET_FILTER, payload: filter };
};
