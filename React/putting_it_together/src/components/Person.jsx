import React, {useState} from 'react';


const Person = (props) => {
    const [userAge, setUserAge] = useState(props.age);

    return (
        <div className='card'>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {userAge}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={ (event) => setUserAge(userAge + 1)}>Birth Day Button for {props.firstName} {props.lastName }</button>
        </div>
    )
}

export default Person;