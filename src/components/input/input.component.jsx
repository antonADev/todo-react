import React, { useContext, useState } from 'react';
import { FormContainer, InputContainer } from './input.styles';
import { GlobalContext } from '../../contexts/globalContext';
import ItemContainer from '../item-container/item-container.component';
import { addTodoToList } from '../../contexts/actions/todoActions';

const Input = () => {
  //
  const { todoItems, todoDispatch, isDark } = useContext(GlobalContext);
  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => setUserInput(e.target.value);

  return (
    <>
      <ItemContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            todoDispatch(addTodoToList(todoItems, userInput));
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
