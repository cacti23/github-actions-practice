import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const getNames = async () => {
    const response = await axios.get('/names');

    setUsername(response.data);
  };

  useEffect(() => {
    getNames();
  }, []);
  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {username}</h3>
    </>
  );
}

export default App;
