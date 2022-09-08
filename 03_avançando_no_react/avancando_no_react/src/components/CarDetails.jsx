export const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>
        Detalhes do carro:
        <ul>
          <li>Marca: {brand}</li>
          <li>Km: {km}</li>
          <li>Cor: {color}</li>
        </ul>
      </h2>
    </div>
  );
};
