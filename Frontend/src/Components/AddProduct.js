import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../constants'
import axios from 'axios'
import {appContext} from '../App'
import Devider from './Divider'


export default function Login() {
    const [inputStatus, setInputStatus] = useState(false)
    const token = localStorage.getItem('shiromeda')
    const navigate = useNavigate()
    async function onSubmit(event){
        event.preventDefault()
        let name = event.target.name.value
        let price = event.target.price.value
        let image = event.target.image.files[0]
        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('price', price)
        formdata.append('product_image', image)
        if(name && price && image){
          let response = await axios({
            method: 'post',
            url: baseUrl + '/api/add-product',
            data: formdata,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            // let response = await fetch(baseUrl + '/api/add-product', {
            //     body: formdata,
            //     method: 'post',
            //     headers: {
            //         'Authorization': 'Bearer ' + token
            //     }
            // })
            // response = await response.json()
            if(response.data.success){
                navigate('/root-admin/')
            } 
        }else {
          setInputStatus(true)                
        }
      
    }
  return (
   
    <div className = 'form-container'>
      <div className = 'sub-container'>
      <div className='danger-alert'>
      {inputStatus && <p style={{padding: '10px', fontStyle: 'italic'}}>Fill all the provided spaces</p>}
      </div>
     <h1 className='market-title'>
        <span className=' title-gray'>MP - </span>Add-Product
      </h1>
      <Devider/>
      <form  onSubmit = {onSubmit}>
        <label>Product Name</label>
          <input
          type='text' 
          name = 'name' placeholder='Product Name'/>
        <label>Price</label>
          <input
          type='number'
          name = 'price' placeholder='Price'/>
        <label>Image</label>
          <input
          type='file'
          name = 'image'/>
          <div className='btn-back-submit-container'>
            <button type='submit' className='btn-submit'>Add+</button>
            <Link to='/root-admin/'  className='btn-back'>Back</Link>
          </div>
      </form>
    </div>
  </div>
  )
}