import { useState } from 'react';
import React from './assets/react.svg';

import { CarDetails } from './components/CarDetails';
import { ConditionalRender } from './components/ConditionalRender';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { ShowUserName } from './components/ShowUserName';
import { Fragment } from './components/Fragment';
import { Container } from './components/Container';
import { ExecuteFunction } from './components/ExecuteFunction';

export const App = () => {
  const [userName] = useState('Maria');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'vermelho', newCar: true, km: 0 },
    { id: 2, brand: 'BMW', color: 'azul', newCar: true, km: 0 },
    { id: 3, brand: 'Renault', color: 'preto', newCar: false, km: 1203 }
  ];

  const showMessage = () => console.log('evento do componente pai!');

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
      <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="branco" newCar={false} />

      {cars.map(car => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment={'teste'} />
      {/* children */}
      <Container myValue={'teste'}>
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue={'teste 2'}>
        <h5>testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
    </div>
  );
};
