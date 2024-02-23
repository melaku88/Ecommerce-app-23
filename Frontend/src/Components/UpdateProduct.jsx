import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../constants'
import axios from 'axios'
import {appContext} from '../App'
import Devider from './Divider'


export default function UpdateProduct() {
    const [inputStatus, setInputStatus] = useState(false)
    const token = localStorage.getItem('shiromeda')
    const [inputs, setInputs] = useState({
      name: '',
      price: '',
    })
    const {name, price} = inputs;
    const navigate = useNavigate();
    const {id} = useParams()
        // ============================================================

    // const handleChange = (event) =>{
    //   const {name, value} = event.target
    //   setInputs({...inputs, [name]: value})
    // }
    // =============================================================
    useEffect(()=>{

      axios({
        method: 'get',
        url: baseUrl + '/api/get-to-update/' + id,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then((response)=>{
      // console.log(response.data)
      setInputs({...response.data})
    })
    .catch((err)=>{ console.log(err)})
    }, [])

    // ============================================================

    // async function onSubmit(event){
    //     event.preventDefault()
    //     let name = event.target.name.value
    //     let price = event.target.price.value
    //     let formdata = new FormData()
    //     formdata.append('name', name)
    //     formdata.append('price', price)
    //     if(name && price){
    //       axios({
    //         method: 'post',
    //         url: baseUrl + '/api/update-product/' + id,
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     .then((response)=>{
    //       if(response.data.success){
    //         navigate('/root-admin/')
    //     }
    //     })
    //     .catch((err)=>{ console.log(err)})
    //   } else {
    //     setInputStatus(true)                
    //   } 
    // }

    // =============================================================

  return (
   
    <div className = 'form-container'>
      <div className = 'sub-container'>
      <div className='danger-alert'>
      {inputStatus && <p style={{padding: '10px', fontStyle: 'italic'}}>Fill all the provided spaces</p>}
      </div>
     <h1 className='market-title'>
        <span className=' title-gray'>MP - </span>Update-Product
      </h1>
      <Devider/>
      <form>
        <label>Product Name</label>
          <input
          type='text' 
          name = 'name' placeholder='Product Name' value={name}/>
        <label>Price</label>
          <input
          type='number'
          name = 'price' placeholder='Price' value={price}/>
        <button type='submit' className='btn-submit'>Update</button>
      </form>
    </div>
  </div>
  )
}