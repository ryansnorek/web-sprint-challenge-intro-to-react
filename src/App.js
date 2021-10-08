import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Set character state
  const [characters, setCharacters] = useState('')

  // Get api data and sync to characters state
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [characters])
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* Pass characters state props to the Character component */}
      <Character characters={characters} setCharacter={setCharacters} />
    </div>
  );
}

export default App;
