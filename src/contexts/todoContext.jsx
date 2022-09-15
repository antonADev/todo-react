import { useReducer, createContext } from 'react';

export const TodoContext = createContext({
  todoItems: [],
  filteredTodo: [],
  userInput: '',
  isDark: Boolean,
});

export const ACTIONS = {
  SET_TODO: 'set-todo',
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  REMOVE_TODO: 'remove-todo',
  FILTER_TODO: 'filter-todo',
  SHOW_ALL_TODO: 'show-all-todo',
  SET_COLOR_MODE: 'set-color-mode',
};

const reducer = (state, action) => {
  const { todoItems, isDark } = state;
  switch (action.type) {
    case ACTIONS.SET_TODO:
      return { ...state, userInput: action.payload };
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todoItems: [...todoItems, newTodo(action.payload.userInput)],
      };
    case ACTIONS.TOGGLE_TODO:
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
    case ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todoItems: [
          ...todoItems.filter((todo) => {
            return todo.id !== action.payload.id;
          }),
        ],
      };
    case ACTIONS.FILTER_TODO:
      return {
        ...state,
        filteredTodo: [
          ...todoItems.filter((todo) => {
            return todo.complete === action.payload.complete;
          }),
        ],
      };
    case ACTIONS.SHOW_ALL_TODO:
      return {
        ...state,
        filteredTodo: [],
        todoItems: [
          ...todoItems.map((todo) => {
            return todo;
          }),
        ],
      };
    case ACTIONS.SET_COLOR_MODE:
      return {
        ...state,
        isDark: !isDark,
      };
    default:
      throw new Error(`Unhandled type of ${action.type} in todoReducer`);
  }
};

const newTodo = (userInput) => {
  return { id: Date.now(), todo: userInput, complete: false };
};

export const TodoProvider = ({ children }) => {
  const [{ todoItems, userInput, filteredTodo, isDark }, dispatch] = useReducer(
    reducer,
    {
      todoItems: [],
      filteredTodo: [],
      userInput: '',
      isDark: true,
    }
  );

  const value = {
    todoItems,
    userInput,
    filteredTodo,
    dispatch,
    isDark,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
