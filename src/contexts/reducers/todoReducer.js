import { TODO_ACTION_TYPES } from '../actionTypes/todoActionTypes';

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TODO_ACTION_TYPES.SET_TODO:
      return {
        ...state,
        todoItems: payload,
      };

    case TODO_ACTION_TYPES.SET_COLOR_MODE:
      return {
        ...state,
        isDark: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in todoReducer`);
  }
};
