import { useEffect, useState } from 'react';

export const List = () => {
  const {users, setUsers } = useState([]);
  const getUsers = async() => {
    const response = await fetch('http://localhost:4801/api/v1/users');
    const json = await response.json();
    setUsers(json.users);
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="Card">
      <h1>card</h1>
      {users.map(user => (
        <div key={index}>
        <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
