import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  // Set character state
  const [character, setCharacter] = useState('')

  // Get api data and sync to character state
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [character])
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
