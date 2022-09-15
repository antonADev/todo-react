import React from 'react';
import { AppContent } from './content-container.styles';

import Header from '../header/header.component';
import Input from '../input/input.component';
import Todos from '../todos/todos.component';

const ContentContainer = () => {
  return (
    <AppContent>
      <Header />

      <Input />

      <Todos />
    </AppContent>
  );
};

export default ContentContainer;
