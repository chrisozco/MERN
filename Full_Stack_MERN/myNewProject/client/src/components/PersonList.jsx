import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PersonList = (props) => {
    const {removedFromDB, people, setPeople} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then((res) => {
            console.log(res)
            setPeople(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/people/${id}`)
        .then((res) => {
            removedFromDB(id)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='d-flex align-items-center flex-column'>
            {
                people.map((person, index) => {
                    return (
                    <div key={index} className='card w-25 my-2 text-light bg-dark'>
                        <p className='card-title'>{person.firstName}</p>
                        <p className='card-title'>{person.lastName}</p>
                        <div>
                        <Link to={`/people/${person._id}`} className='card-link'>{person.firstName}'s Page!</Link>
                        <Link to={`/people/edit/${person._id}`} className='card-link'>Edit!</Link>
                        </div>
                        <button className='btn btn-danger' onClick={(e) => deleteHandler(person._id)} >Delete Person</button>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default PersonList