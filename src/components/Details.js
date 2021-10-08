import React from 'react'
import styled from 'styled-components'

const DetailsWrapper = styled.div`
    .id-card {
        width: 100%;
        background-color: #effeec;
        display: flex;
        justify-content: space-around;
        margin: 2%;
    }
    img, .text, .id {
        margin: 2%;
    }
    .id {  
        border-bottom: 1px solid black;
    }
`

export default function Features(props) {
    const { character } = props

    return (
        <DetailsWrapper>
            <div className="id-card">
                <img src={character.url} alt={character.name}></img>
                <div className="text">
                    <p className="id">Birth year: {character.birth_year}</p>
                    <p className="id">Gender: {character.gender}</p>
                    <p className="id">Height: {character.height}</p>
                    <p className="id">Weight: {character.mass}</p>
                    <p className="id">Eye color: {character.eye_color}</p>
                    <p className="id">Hair color: {character.hair_color}</p>
                    <p className="id">Skin color: {character.skin_color}</p>
                </div>
            </div>
        </DetailsWrapper>
    )
}
