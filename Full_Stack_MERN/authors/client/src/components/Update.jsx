import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) =>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            firstName,
            lastName
        })
        .then(res=>{
            console.log(res)
            navigate('/home')
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div className='col-6 mx-auto'>
            <div>
            <h1>Favorite Authors</h1>
            <Link to={'/home'}>Home</Link>
            </div>
            <div>
                <form onSubmit={updateAuthor}>
                    <div className='form-group'>
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

export default Update