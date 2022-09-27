import { FILTERED_ACTION_TYPES } from './filter.type';

const FILTERED_INITIAL_STATE = {
  filter: 'ALL',
};

export const filterReducer = (state = FILTERED_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERED_ACTION_TYPES.SHOW_ALL:
      return {
        filter: 'ALL',
      };
    case FILTERED_ACTION_TYPES.SHOW_COMPLETE:
      return {
        filter: 'COMPLETE',
      };
    case FILTERED_ACTION_TYPES.SHOW_INCOMPLETE:
      return {
        filter: 'INCOMPLETE',
      };
    default:
      return state;
  }
};
