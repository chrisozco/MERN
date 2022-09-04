import React from 'react';

const Person = (props) => {
    return (
        <div className='card'>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </div>
    )
}

export default Person;