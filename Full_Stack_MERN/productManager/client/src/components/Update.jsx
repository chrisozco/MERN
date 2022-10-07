import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () =>{
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
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
            <h1>Product Manager</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label className='form-label'>Title: </label>
                    <input type="text"
                    className='form-control'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Price: </label>
                    <input type="text"
                    className='form-control'
                    name='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Description: </label>
                    <input type="text"
                    className='form-control'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className='btn btn-primary mt-4'>Edit Product!</button>
            </form>
        </div>
    )
}

export default Update