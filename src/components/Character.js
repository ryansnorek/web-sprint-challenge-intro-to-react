import React, { useState } from 'react'
import Details from './Details'

export default function Character(props) {
    // Destructure character props
    const { character } = props

    // Create visibility state for Features
    const [visibility, setVisibility] = useState(false)

    return (
        <div>
            <button>{character.name}</button>
            <Details character={character}/>
            {/* {visibility && <Details character={character}/>} */}
        </div>
    )
}
