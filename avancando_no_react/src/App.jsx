import React from './assets/react.svg';

export const App = () => {
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
    </div>
  );
};
