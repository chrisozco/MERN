import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {title, price, description})
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='col-6 mx-auto'>
            <h1>Product Manager</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <label className='form-label'>Title: </label>
                    <input type="text"  className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Price: </label>
                    <input type="text"  className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Description: </label>
                    <input type="text"  className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className='btn btn-primary mt-4'>Add Product!</button>
            </form>
        </div>
    )
}

export default ProductForm