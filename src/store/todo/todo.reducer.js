import { TODO_ACTIONS } from './todo.type';

const TODO_INITIAL_STATE = {
  todoItems: [],
  isDark: true,
};

export const todoReducer = (state = TODO_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TODO_ACTIONS.SET_TODO_ITEM:
      return {
        ...state,
        todoItems: payload,
      };

    case TODO_ACTIONS.SET_COLOR_MODE:
      return {
        ...state,
        isDark: payload,
      };
    default:
      return state;
  }
};
