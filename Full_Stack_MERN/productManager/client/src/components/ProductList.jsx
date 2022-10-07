import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props

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
    
    return(
        <div className='d-flex align-items-center flex-column'>
            {
                products.map((product, index) => {
                    return (
                    <div key={index} className='card w-50 my-2'>
                        <Link to={`/product/${product._id}`} className='card-title'>{product.title}</Link>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default ProductList