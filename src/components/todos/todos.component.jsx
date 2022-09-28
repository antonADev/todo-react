import React from 'react';
import { TodosContainer } from './todos.styles';
import Todo from '../todo/todo.component';
import { useSelector } from 'react-redux';

import { selectTodoItems, selectIsDark } from '../../store/todo/todo.selector';

import ActionButtons from '../action-buttons/action-buttons.component';
import { selectFilterVisibility } from '../../store/filter/filter.selector';

const Todos = () => {
  const todoItems = useSelector(selectTodoItems);
  const isDark = useSelector(selectIsDark);
  const filter = useSelector(selectFilterVisibility);

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
      {/* <TodosContainer todo={todoItems} isDark={isDark}>
        {todoItems.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodosContainer>
      {todoItems.length !== 0 && <ActionButtons />} */}
    </>
  );
};

export default Todos;
