import React from 'react';
import { TodoItem, TodoSpan } from './todo.styles';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsDark, selectTodoItems } from '../../store/todo/todo.selector';
import {
  removeTodoFromList,
  toggleTodoInList,
} from '../../store/todo/todo.action';

const Todo = ({ todo }) => {
  const todoItems = useSelector(selectTodoItems);
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();
  return (
    <TodoItem
      isDark={isDark}
      complete={todo.complete}
      onDoubleClick={() => {
        dispatch(removeTodoFromList(todoItems, todo));
      }}>
      <TodoSpan>
        <input
          defaultChecked={todo.complete}
          type='checkbox'
          onClick={() => {
            dispatch(toggleTodoInList(todoItems, todo));
          }}
        />
      </TodoSpan>
      {todo.todo}
    </TodoItem>
  );
};

export default Todo;
