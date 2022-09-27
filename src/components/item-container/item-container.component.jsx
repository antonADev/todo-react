import React from 'react';
import { useSelector } from 'react-redux';

import {
  ItemContainerStyle,
  InnerContainerStyle,
} from './item-container.styles';
import { selectIsDark } from '../../store/todo/todo.selector';

const ItemContainer = ({ children, noPad }) => {
  const isDark = useSelector(selectIsDark);
  return (
    <ItemContainerStyle isDark={isDark}>
      <InnerContainerStyle noPad={noPad}>{children}</InnerContainerStyle>
    </ItemContainerStyle>
  );
};

export default ItemContainer;
