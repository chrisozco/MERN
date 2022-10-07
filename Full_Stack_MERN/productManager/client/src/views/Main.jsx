import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([])
    const removedFromDB = (id) => {
        setProducts(products.filter(product => product._id !== id))
    }

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} removedFromDB={removedFromDB} />
        </div>
    )
}

export default Main