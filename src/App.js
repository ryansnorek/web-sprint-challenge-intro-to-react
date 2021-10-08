import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Set character state
  const [characters, setCharacters] = useState([])

  // Get api data
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [])

  
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* map over list of characters and mount a component for each character */}
      {characters.map(character => <Character character={character}/>)}
    </div>
  );
}

export default App;
