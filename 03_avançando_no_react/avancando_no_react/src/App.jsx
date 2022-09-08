import { useState } from 'react';
import React from './assets/react.svg';
import { ConditionalRender } from './components/ConditionalRender';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { ShowUserName } from './components/ShowUserName';

export const App = () => {
  const [userName] = useState('Maria');
  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        {/* imagem em public */}
        <img src="/vite.svg" alt="Logomarca do Vite" />
      </div>
      <div>
        {/* imagem em asset */}
        <img src={React} alt="Logomarca do React" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={'Felipe'} userName={userName} />
    </div>
  );
};
