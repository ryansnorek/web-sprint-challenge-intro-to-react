import React, { useState } from 'react'
import Details from './Details'

export default function Character(props) {
    // Destructure character props
    const { character } = props

    // Create visibility state for Features
    const [visibility, setVisibility] = useState(false)

    return (
        <div>
            <h2>{character.name}</h2>
            <button>Show Details</button>
            {/* {visibility && <Details character={character}/>} */}
        </div>
    )
}
