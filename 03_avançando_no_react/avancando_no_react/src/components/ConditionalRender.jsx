import { useState } from 'react';

export const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, não!</p>}

      <h1>If ternário</h1>
      {name ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName('João')}>Altere o nome para João</button>
    </div>
  );
};
