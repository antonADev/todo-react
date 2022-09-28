import { FILTERED_ACTION_TYPES } from '../actionTypes/filteredActionTypes';

export const setFilter = (filter) => {
  return { type: FILTERED_ACTION_TYPES.SHOW_FILTERED, payload: filter };
};
