import React from 'react'
import Product from '../components/Product.js';
import data from '../data.js';

export default function HomeScreen() {
    return (
        <div className="row center">
            {
                data.product.map(product => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
        </div>
    )
}
