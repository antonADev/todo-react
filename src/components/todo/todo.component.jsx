import React, { useState, useContext } from 'react';
import { LightTodoItem, TodoItem, TodoSpan } from './todo.styles';

import { TodoContext } from '../../contexts/todoContext';
import { TODO_ACTIONS } from '../../contexts/actionTypes/todoActionTypes';
const Todo = ({ todo }) => {
  const { isDark, todoDispatch } = useContext(TodoContext);

  return (
    <TodoItem
      isDark={isDark}
      complete={todo.complete}
      onDoubleClick={() => {
        todoDispatch({
          type: TODO_ACTIONS.REMOVE_TODO,
          payload: { id: todo.id },
        });
      }}>
      <TodoSpan>
        <input
          defaultChecked={todo.complete}
          type='checkbox'
          onClick={() => {
            todoDispatch({
              type: TODO_ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            });
          }}
        />
      </TodoSpan>
      {todo.todo}
    </TodoItem>
  );
};

export default Todo;
