import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Detail = () =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log('Delete Successful')
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='mx-auto card w-25 my-2'>
            <h2 className='card-title'>{product.title}</h2>
            <p className='card-text'>Price: ${product.price}</p>
            <p className='card-text'>Description: {product.description}</p>
            <button className='btn btn-danger' onClick={(e) => deleteHandler(product._id)} >Delete</button>
        </div>
    )
}

export default Detail