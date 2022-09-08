import { useState } from 'react';
import React from './assets/react.svg';
import { CarDetails } from './components/CarDetails';
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
      {/* props */}
      <ShowUserName name={'Felipe'} userName={userName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color="azul" />
    </div>
  );
};
