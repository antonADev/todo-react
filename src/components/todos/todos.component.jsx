import React, { useContext, useState } from 'react';
import { TodosContainer } from './todos.styles';
import Todo from '../todo/todo.component';
import { TodoContext } from '../../contexts/todoContext';

import ActionButtons from '../action-buttons/action-buttons.component';

const Todos = () => {
  const { todoItems, isDark } = useContext(TodoContext);
  const { filter } = useContext(TodoContext);
  const filteredTodos = todoItems.filter((todo) => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <>
      <TodosContainer todo={filteredTodos} isDark={isDark}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodosContainer>
      {todoItems.length !== 0 && <ActionButtons />}
    </>
  );
};

export default Todos;
