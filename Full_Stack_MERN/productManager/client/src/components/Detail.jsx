import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = () =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()

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

    return(
        <div className='mx-auto card w-25 my-2'>
            <h2 className='card-title'>{product.title}</h2>
            <p className='card-body'>Price: ${product.price}</p>
            <p className='card-body'>Description: {product.description}</p>
        </div>
    )
}

export default Detail