import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
        .then((res) =>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updatePerson = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/people/${id}`, {
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res)
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className='col-6 mx-auto'>
            <form onSubmit={updatePerson}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input type="text" 
                    name='firstName'
                    value={firstName}
                    className='form-control' 
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input type="text" 
                    name='lastName'
                    value={lastName}
                    className='form-control' 
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <input className='btn btn-primary mt-4' type="submit" />
            </form>
        </div>
    )
}

export default Update