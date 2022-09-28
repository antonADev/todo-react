import { FILTERED_ACTION_TYPES } from '../actionTypes/filteredActionTypes';

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERED_ACTION_TYPES.SHOW_FILTERED:
      return {
        filter: payload,
      };

    default:
      throw new Error();
  }
};
