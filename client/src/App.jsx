import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await axios.get('http://localhost:4801/api/v1/users');
    console.log(response.data.user);
    setUsers(response.data.user);
  }
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  const handleSubmit = async (event) => {
    console.log(name, age);
    event.preventDefault();
    try {
      await axios.post('http://localhost:4801/api/v1/users', {
        name: name,
        age: age
      });
    } catch (err) {
      console.error(err.message);
    }
    setName('');
    setAge('');
  }
  useEffect(() => {
    getData();
  }, []);
  return(
    <div className="App">
    {users.map((user) => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.id}</p>
        <hr />
      </div>
    ))}
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    id="name"
    onChange={handleNameChange}
    />
    <input
    type="text"
    id="age"
    onChange={handleAgeChange}
    />
    <button
    type="submit">Submit</button>
    </form>
    </div>
  )
}
export default App;
