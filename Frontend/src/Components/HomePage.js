import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { baseUrl } from '../constants'
import { appContext } from '../App'
// import {BsCartPlusFill} from 'react-icons/bs'
import {BiSolidCartAdd} from 'react-icons/bi'
import {BiSolidCart} from 'react-icons/bi'

export default function MyProducts() {
     // ================================================ add to cart
    
    const {handdleAddProduct, cartItems, removeAddedProduct} = useContext(appContext);
    // ====================================== Fitch data
    const [products, setProducts] = useState([])

    // ===========================================================
    useEffect(() => {
        axios({
            method: 'get',
            url: baseUrl + '/api/products',

        }).then(response => {
            if(response.data.success){
                setProducts(response.data.products)
            }
        })
    }, [])
   
  return (
    <>
        <div className='product-container'>
            {products.length == 0 && <p>You have no products yet!</p>}
            {products.map((product, index) => (
                <div key={index} className='product-box'>
                    <div className='image-container'>
                      <img src={baseUrl + product.image} alt='' />
                    </div>
                    <p>{product.name}</p>
                    <p>ETB {product.price}</p>
                    <div className='add-to-cart-btn-container'>
                        {
                         cartItems.filter(p => p.id == product.id).length > 0 ? (
                            <button onClick={()=>removeAddedProduct(product)} className='remove-from-cart-btn'><BiSolidCart/></button> 
                         ) :(
                            <button onClick={()=>handdleAddProduct(product)} className='add-to-cart-btn'><BiSolidCartAdd/></button> 
                         ) 
                        }
                    </div>
                    
                </div>
            ))} 
        </div>
    </>
  )
}
