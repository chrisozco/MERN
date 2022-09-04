import React from 'react';

const List = (props) =>{
    return(
        <>
            <h2>Things I need to do:</h2>
            <ul className='list'>
                <li>Learn React!</li>
                <li>Climb Mt. Everest</li>
                <li>Run a Marathon</li>
                <li>Feed the Dogs</li>
            </ul>
        </>
    )
}

export default List;