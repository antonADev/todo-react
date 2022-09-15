import React, { useState, useContext } from 'react';
import { LightTodoItem, TodoItem, TodoSpan } from './todo.styles';

import { TodoContext } from '../../contexts/todoContext';
import { ACTIONS } from '../../contexts/todoContext';
const Todo = ({ todo }) => {
  const { isDark, dispatch } = useContext(TodoContext);

  return (
    <TodoItem
      isDark={isDark}
      complete={todo.complete}
      onDoubleClick={() => {
        dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } });
      }}>
      <TodoSpan>
        <input
          defaultChecked={todo.complete}
          type='checkbox'
          onClick={() => {
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
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
