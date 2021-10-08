import React from 'react'

export default function Features(props) {
    const { character } = props

    return (
        <div>
            <p>Birth year: {character.birth_year}</p>
        </div>
    )
}
