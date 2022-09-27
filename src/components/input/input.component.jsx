import React, { useState } from 'react';
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
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => setUserInput(e.target.value);

  return (
    <>
      <ItemContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodoToList(todoItems, userInput));
            setUserInput('');
            // dispatch({
            //   type: ACTIONS.SET_TODO,
            //   payload: '',
            // });
            // dispatch({ type: ACTIONS.SET_TODO, payload: '' });
          }}>
          <InputContainer
            required
            isDark={isDark}
            type='text'
            value={userInput}
            placeholder='Create a new todo...'
            // onChange={(e) =>
            //   dispatch({
            //     type: ACTIONS.SET_TODO,
            //     payload: e.target.value,
            //   })
            // }
            onChange={handleChange}
          />
        </FormContainer>
      </ItemContainer>
    </>
  );
};

export default Input;
