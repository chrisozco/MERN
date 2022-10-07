import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Detail = () => {
    const [person, setPerson] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
        .then((res) =>{
            console.log(res.data)
            setPerson(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/people/${id}`)
        .then((res) => {
            console.log('Delete Successful')
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='mx-auto card w-25 my-2 text-light bg-dark'>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <button className='btn btn-danger' onClick={(e) => deleteHandler(person._id)} >Delete Person</button>
        </div>
    )
}



export default Detail