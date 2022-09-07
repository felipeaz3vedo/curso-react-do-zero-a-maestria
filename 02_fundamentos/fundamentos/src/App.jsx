//components
import { Events } from './components/Events';
import { FirstComponent } from './components/FisrtComponent';
import { MyComponent } from './components/MyComponent';
import { TemplateExpressions } from './components/TemplateExpressions';

export const App = () => {
  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </>
  );
};
import React from 'react'

