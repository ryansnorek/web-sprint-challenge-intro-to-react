import React, { useState } from 'react'
import Details from './Details'
import styled from 'styled-components'

const FlexWrapper = styled.div`
    .container {
        display: flex;
    }
    .left {
        width: 40%;
    }
    .right {
        width: 60%;
        margin-right: 6%;
    }
`

export default function Character(props) {
    // Destructure character props
    const { character } = props

    // Visibility state for Features
    const [visibility, setVisibility] = useState(false)

    // Toggle details for character on button click
    function toggleDetails() {
        setVisibility(!visibility)
    }

    return (
        <FlexWrapper>
            <div className="container">
                <div className="left">
                    <h2>{character.name}</h2>
                    <button onClick={toggleDetails}>Details</button>
                </div>
                <div className="right">
                    {visibility && <Details character={character}/>}
                </div>
            </div>
        </FlexWrapper>
    )
}
