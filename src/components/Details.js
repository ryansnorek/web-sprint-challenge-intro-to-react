import React from 'react'

export default function Features(props) {
    const { character } = props

    return (
        <div>
            <p>{character.birth_year}</p>
        </div>
    )
}
