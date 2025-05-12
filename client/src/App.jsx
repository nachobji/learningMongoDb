import { useState } from 'react'
import './App.css'
import { List } from '../src/components/Card.jsx';
import axios from 'axios';

function App() {
  const users = axios.get('http://localhost:4801/api/v1/users')
    .then(function (response){
      console.log(response);
    }).finally();

  return (
    <div className="App">
    <h1>{users}</h1>
    </div>
  )
}

export default App
