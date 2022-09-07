import { useState } from 'react';

export const ConditionalRender = () => {
  const [x] = useState(true);

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, não!</p>}
    </div>
  );
};
