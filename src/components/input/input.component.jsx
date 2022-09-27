import React, { useContext, useState } from 'react';
import { FormContainer, InputContainer } from './input.styles';
import { TodoContext } from '../../contexts/todoContext';
import ItemContainer from '../item-container/item-container.component';
import { TODO_ACTIONS } from '../../contexts/actionTypes/todoActionTypes';
const newTodo = (todo) => {
  return { id: Date.now(), todo: todo, complete: false };
};

const Input = () => {
  //
  const { todoDispatch, isDark } = useContext(TodoContext);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => setUserInput(e.target.value);

  return (
    <>
      <ItemContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            todoDispatch({
              type: TODO_ACTIONS.ADD_TODO,
              payload: userInput,
            });
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
