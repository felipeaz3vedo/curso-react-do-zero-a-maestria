import { useState } from 'react';

export const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias']);
  const [users, setUsers] = useState([
    { id: 1, name: 'Felipe', age: 30 },
    { id: 2, name: 'Pedro', age: 31 },
    { id: 3, name: 'Heitor', age: 18 }
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    setUsers(prevUsers => {
      return prevUsers.filter(user => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}, {user.age} anos
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete um usuário aleatoriamente</button>
    </div>
  );
};
