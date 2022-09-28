import { useReducer, createContext } from 'react';
import FilteredInitialState from './initialStates/filteredInitialState';
import TodoInitialState from './initialStates/todoInitialState';
import { filterReducer } from './reducers/filteredReducer';
import { todoReducer } from './reducers/todoReducer';
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [{ todoItems, isDark }, todoDispatch] = useReducer(
    todoReducer,
    TodoInitialState
  );
  const [{ filter }, visibilityDispatch] = useReducer(
    filterReducer,
    FilteredInitialState
  );

  const value = {
    todoItems,
    todoDispatch,
    isDark,
    filter,
    visibilityDispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
