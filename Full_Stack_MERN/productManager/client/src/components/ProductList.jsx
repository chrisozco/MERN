import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {removedFromDB, products, setProducts} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res)
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
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
                products.map((product, index) => {
                    return (
                    <div key={index} className='card w-50 my-2'>
                        <h3 className='card-title'>{product.title}</h3>
                        <div>
                        <Link to={`/product/${product._id}`} className='card-body'>More Info</Link>
                        <Link to={`/product/edit/${product._id}`} className='card-body'>Edit Product</Link>
                        </div>
                        <button className='btn btn-danger' onClick={(e) => deleteHandler(product._id)} >Delete Product</button>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default ProductList