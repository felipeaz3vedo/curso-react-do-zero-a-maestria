export const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      {newCar ? <h3>NOVO</h3> : <h3>USADO</h3>}
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};
