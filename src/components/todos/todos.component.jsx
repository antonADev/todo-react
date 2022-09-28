import React, { useContext, useMemo } from 'react';
import { TodosContainer } from './todos.styles';
import Todo from '../todo/todo.component';
import { GlobalContext } from '../../contexts/globalContext';

import ActionButtons from '../action-buttons/action-buttons.component';

const Todos = () => {
  const { todoItems, isDark } = useContext(GlobalContext);
  const { filter } = useContext(GlobalContext);
  const filteredTodos = useMemo(
    () =>
      todoItems.filter((todo) => {
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
      }),
    [filter, todoItems]
  );

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
