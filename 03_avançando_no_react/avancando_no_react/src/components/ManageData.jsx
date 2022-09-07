import { useState } from 'react';

export const ManageData = () => {
  let someData = 10;
  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Mudar variável</button>
      </div>
    </div>
  );
};
