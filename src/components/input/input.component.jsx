import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormContainer, InputContainer } from './input.styles';

import ItemContainer from '../item-container/item-container.component';
import { selectTodoItems, selectIsDark } from '../../store/todo/todo.selector';
import { addTodoToList } from '../../store/todo/todo.action';
const Input = () => {
  //
  const isDark = useSelector(selectIsDark);
  const todoItems = useSelector(selectTodoItems);
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <>
      <ItemContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodoToList(todoItems, inputRef.current.value));
            inputRef.current.value = '';
          }}>
          <InputContainer
            required
            isDark={isDark}
            type='text'
            ref={inputRef}
            placeholder='Create a new todo...'
          />
        </FormContainer>
      </ItemContainer>
    </>
  );
};

export default Input;
