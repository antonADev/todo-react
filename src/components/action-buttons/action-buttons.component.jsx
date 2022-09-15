import React, { useContext } from 'react';
import { ACTIONS } from '../../contexts/todoContext';
import { TodoContext } from '../../contexts/todoContext';

import { ButtonContainer, Button } from './action-buttons.styles';

const ActionButtons = () => {
  const { isDark, dispatch } = useContext(TodoContext);
  return (
    <ButtonContainer isDark={isDark}>
      <Button
        onClick={() => {
          dispatch({ type: ACTIONS.SHOW_ALL_TODO });
        }}>
        All
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: ACTIONS.FILTER_TODO,
            payload: { complete: false },
          });
        }}>
        Active
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: ACTIONS.FILTER_TODO,
            payload: { complete: true },
          });
        }}>
        Completed
      </Button>
    </ButtonContainer>
  );
};

export default ActionButtons;
