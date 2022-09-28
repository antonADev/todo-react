import { FILTERED_ACTION_TYPES } from './filter.type';

const FILTERED_INITIAL_STATE = {
  filter: 'ALL',
};

export const filterReducer = (state = FILTERED_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERED_ACTION_TYPES.SET_FILTER:
      return {
        filter: payload,
      };
    default:
      return state;
  }
};
