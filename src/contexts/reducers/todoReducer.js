import { TODO_ACTIONS } from '../actionTypes/todoActionTypes';

export const todoReducer = (state, action) => {
  const { todoItems, isDark } = state;
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        // todoItems: [...todoItems, newTodo(action.payload.userInput)],
        todoItems: [
          ...todoItems,
          { id: Date.now(), todo: action.payload, complete: false },
        ],
      };
    case TODO_ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todoItems: [
          ...todoItems.map((todo) => {
            if (todo.id === action.payload.id) {
              return { ...todo, complete: !todo.complete };
            }
            return todo;
          }),
        ],
      };
    case TODO_ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todoItems: [
          ...todoItems.filter((todo) => {
            return todo.id !== action.payload.id;
          }),
        ],
      };

    case TODO_ACTIONS.SET_COLOR_MODE:
      return {
        ...state,
        isDark: !isDark,
      };
    default:
      throw new Error(`Unhandled type of ${action.type} in todoReducer`);
  }
};
