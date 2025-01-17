import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const Wrapper = styled.div`
  button {
    background-color: black;
    color: #8fce00;
    box-shadow: 2px 1px 2px #4f4f4f;
  }
  button:hover {
    text-shadow: 0 0 1px #8fce00;
  }
`

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
    <Wrapper>
      <div className="App">
        <h1 className="Header">Characters</h1>
        {/* map over list of characters and mount a component for each character */}
        {characters.map((character ,idx) => <Character key={idx}character={character}/>)}
      </div>
    </Wrapper>
  );
}

export default App;
