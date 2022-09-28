import { TODO_ACTION_TYPES } from '../actionTypes/todoActionTypes';

const createTodoItem = (todoItems, todoToAdd) => {
  return [...todoItems, { id: Date.now(), todo: todoToAdd, complete: false }];
};

const removeTodoItem = (todoItems, todoToRemove) => {
  return [
    ...todoItems.filter((todo) => {
      return todo.id !== todoToRemove.id;
    }),
  ];
};

const toggleTodoItem = (todoItems, todoToToggle) => {
  return [
    ...todoItems.map((todo) => {
      if (todo.id === todoToToggle.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    }),
  ];
};

export const addTodoToList = (todoItems, todoToAdd) => {
  const newTodo = createTodoItem(todoItems, todoToAdd);
  return { type: TODO_ACTION_TYPES.SET_TODO, payload: newTodo };
};
export const removeTodoFromList = (todoItems, todoToRemove) => {
  const newTodo = removeTodoItem(todoItems, todoToRemove);
  return { type: TODO_ACTION_TYPES.SET_TODO, payload: newTodo };
};
export const toggleTodoInList = (todoItems, todoToToggle) => {
  const newTodo = toggleTodoItem(todoItems, todoToToggle);
  return { type: TODO_ACTION_TYPES.SET_TODO, payload: newTodo };
};

export const setIsDark = (boolean) => {
  return { type: TODO_ACTION_TYPES.SET_COLOR_MODE, payload: boolean };
};
