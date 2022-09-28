import { combineReducers } from 'redux';
import { filterReducer } from './filter/filter.reducer';

import { todoReducer } from './todo/todo.reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
