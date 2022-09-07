import { useState } from 'react';

export const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias']);

  return (
    <div>
      {list.map(item => (
        <li>{item}</li>
      ))}
    </div>
  );
};
