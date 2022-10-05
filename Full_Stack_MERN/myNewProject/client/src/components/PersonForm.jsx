import React, { useState } from 'react'
import axios from 'axios'

const PersonForm = (props) =>{
    const {people, setPeople} = props
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/people', {firstName, lastName})
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setPeople([...people, res.data])
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='col-6 mx-auto'>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)} />
                </div>
                <input className='btn btn-primary mt-4' type="submit" />
            </form>
        </div>
    )
}

export default PersonForm