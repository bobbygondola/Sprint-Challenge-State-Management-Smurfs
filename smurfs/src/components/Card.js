import React from 'react'

const Card = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
    <p>{props.smurf.age}</p>
    <p>{props.smurf.height}</p>
    <p>{props.smurf.id}</p>
        </div>
    )
}
export default Card;