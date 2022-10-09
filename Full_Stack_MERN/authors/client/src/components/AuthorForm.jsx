import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', {firstName, lastName})
        .then(res => {
            console.log(res)
            console.log(res.data)
            navigate('/home')
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div  className='col-6 mx-auto'>
            <div>
            <h1>Favorite Authors</h1>
            <Link to={'/home'}>Home</Link>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='form-label'>First Name:</label>
                        <input type="text" className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {errors.firstName ? <p className='alert alert-warning'>{errors.firstName.message}</p> : null}
                    </div>
                    <div>
                        <label className='form-label'>Last Name:</label>
                        <input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {errors.lastName ? <p className='alert alert-warning'>{errors.lastName.message}</p> : null}
                    </div>
                    <div className='d-flex justify-content-around mt-4'>
                    <Link to={'/home'}><button className='btn btn-warning'>Cancel</button></Link>
                    <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm