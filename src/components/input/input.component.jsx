import React, { useContext } from 'react';
import { FormContainer, InputContainer } from './input.styles';
import { TodoContext } from '../../contexts/todoContext';
import ItemContainer from '../item-container/item-container.component';
import { ACTIONS } from '../../contexts/todoContext';
const newTodo = (todo) => {
  return { id: Date.now(), todo: todo, complete: false };
};

const Input = () => {
  //
  const { userInput, dispatch, isDark } = useContext(TodoContext);

  return (
    <>
      <ItemContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: ACTIONS.ADD_TODO,
              payload: { userInput: userInput },
            });
            dispatch({
              type: ACTIONS.SET_TODO,
              payload: '',
            });
            // dispatch({ type: ACTIONS.SET_TODO, payload: '' });
          }}>
          <InputContainer
            required
            isDark={isDark}
            type='text'
            value={userInput}
            placeholder='Create a new todo...'
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_TODO,
                payload: e.target.value,
              })
            }
          />
        </FormContainer>
      </ItemContainer>
    </>
  );
};

export default Input;
