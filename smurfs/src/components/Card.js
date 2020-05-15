import React from 'react'

const Card = props => {
    return (
        <div className="card" key={props.smurf.id}>
            <h2>{props.smurf.name} Smurf!</h2>
        <p>{props.smurf.height}</p>
        <p>{props.smurf.age} Years Old</p>
        </div>
    )
}
export default Card;