import { MyComponent } from './MyComponent';

export const FirstComponent = () => {
  //comentario de uma linha na parte lógica da função

  /* 
  comentário de
  múltiplas linhas na parte lógica da função
  */

  return (
    <div>
      {/* comentário no JSX */}

      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>

      <MyComponent />
    </div>
  );
};
