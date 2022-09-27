import { FILTERED_ACTIONS } from '../actionTypes/filteredActionTypes';

export const filterReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case FILTERED_ACTIONS.SHOW_ALL:
      return {
        filter: 'ALL',
      };
    case FILTERED_ACTIONS.SHOW_COMPLETE:
      return {
        filter: 'COMPLETE',
      };
    case FILTERED_ACTIONS.SHOW_INCOMPLETE:
      return {
        filter: 'INCOMPLETE',
      };
    default:
      throw new Error();
  }
};
