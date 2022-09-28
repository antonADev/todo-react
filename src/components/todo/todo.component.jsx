import React, { useContext } from 'react';
import { TodoItem, TodoSpan } from './todo.styles';

import {
  removeTodoFromList,
  toggleTodoInList,
} from '../../contexts/actions/todoActions';

import { GlobalContext } from '../../contexts/globalContext';
const Todo = ({ todo }) => {
  const { todoItems, isDark, todoDispatch } = useContext(GlobalContext);
  return (
    <TodoItem
      isDark={isDark}
      complete={todo.complete}
      onDoubleClick={() => {
        todoDispatch(removeTodoFromList(todoItems, todo));
      }}>
      <TodoSpan>
        <input
          defaultChecked={todo.complete}
          type='checkbox'
          onClick={() => {
            todoDispatch(toggleTodoInList(todoItems, todo));
          }}
        />
      </TodoSpan>
      {todo.todo}
    </TodoItem>
  );
};

export default Todo;
