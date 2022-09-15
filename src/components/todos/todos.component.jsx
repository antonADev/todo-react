import React, { useContext, useState } from 'react';
import { TodosContainer } from './todos.styles';
import Todo from '../todo/todo.component';
import { TodoContext } from '../../contexts/todoContext';

import ActionButtons from '../action-buttons/action-buttons.component';

const Todos = () => {
  const { todoItems, filteredTodo, isDark } = useContext(TodoContext);

  return (
    <>
      <TodosContainer todo={todoItems} isDark={isDark}>
        {filteredTodo.length === 0
          ? todoItems?.map((todo) => <Todo key={todo.id} todo={todo} />)
          : filteredTodo.map((todo) => <Todo key={todo.id} todo={todo} />)}

        <ActionButtons />
      </TodosContainer>
    </>
  );
};

export default Todos;
