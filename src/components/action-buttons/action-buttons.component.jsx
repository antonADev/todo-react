import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FILTERED_ACTIONS } from '../../contexts/actionTypes/filteredActionTypes';
import { TodoContext } from '../../contexts/todoContext';

import { selectIsDark } from '../../store/todo/todo.selector';
import { showFilter } from '../../store/filter/filter.action';

import { ButtonContainer, Button } from './action-buttons.styles';

const ActionButtons = () => {
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();

  return (
    <ButtonContainer isDark={isDark}>
      <Button
        onClick={() => {
          dispatch(showFilter('ALL'));
        }}>
        All
      </Button>
      <Button
        onClick={() => {
          dispatch(showFilter('INCOMPLETE'));
        }}>
        Active
      </Button>
      <Button
        onClick={() => {
          dispatch(showFilter('COMPLETE'));
        }}>
        Completed
      </Button>
    </ButtonContainer>
  );
};

export default ActionButtons;
