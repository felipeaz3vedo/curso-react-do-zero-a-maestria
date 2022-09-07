export const TemplateExpressions = () => {
  const name = 'Felipe';
  const data = {
    age: 30,
    job: 'programador'
  };

  return (
    <div>
      <h1>Olá {name}!</h1>
      <p>você atua como {data.job}?</p>
      <p>{4 + 4}</p>
      {console.log('JSX REACT')}
    </div>
  );
};
