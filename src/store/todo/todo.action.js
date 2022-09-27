import { TODO_ACTIONS } from './todo.type';

const createTodoItem = (todoItems, todoToCreate) => {
  return [
    ...todoItems,
    { id: Date.now(), todo: todoToCreate, complete: false },
  ];
};

const removeTodoItem = (todoItems, todoToDelete) => {
  return [
    ...todoItems.filter((todo) => {
      return todo.id !== todoToDelete.id;
    }),
  ];
};

const toggleTodo = (todoItems, todoToToggle) => {
  return [
    ...todoItems.map((todo) => {
      if (todo.id === todoToToggle.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    }),
  ];
};

export const addTodoToList = (todoItems, todoToCreate) => {
  const newTodoItems = createTodoItem(todoItems, todoToCreate);
  return { type: TODO_ACTIONS.SET_TODO_ITEM, payload: newTodoItems };
};
export const removeTodoFromList = (todoItems, todoToRemove) => {
  const newTodoItems = removeTodoItem(todoItems, todoToRemove);
  return { type: TODO_ACTIONS.SET_TODO_ITEM, payload: newTodoItems };
};
export const toggleTodoInList = (todoItems, todoToToggle) => {
  const newTodoItems = toggleTodo(todoItems, todoToToggle);
  return { type: TODO_ACTIONS.SET_TODO_ITEM, payload: newTodoItems };
};

export const setIsDark = (boolean) => {
  return { type: TODO_ACTIONS.SET_COLOR_MODE, payload: boolean };
};
