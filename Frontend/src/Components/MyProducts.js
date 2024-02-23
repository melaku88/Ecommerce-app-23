import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { baseUrl } from '../constants'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiFillPlusCircle} from 'react-icons/ai'

export default function MyProducts() {
  const [products, setProducts] = useState([])
  const token = localStorage.getItem('shiromeda');
  const navigate = useNavigate();


  // =======================================================

  const loadData = () => {
    axios({
      method: 'get',
      url: baseUrl + '/api/my-products',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => {
        console.log(response.data)
        if (response.data.success) {
          setProducts(response.data.products)
        }
      })
  }
  // ======================================================
  useEffect(() => {
    loadData();
  }, [])

  // ========================================================= DELETE

  const deleteProduct = (id) => {
    if (window.confirm('are you sure to delete the product?')) {
      axios({
        method: 'get',
        url: baseUrl + '/api/delete-product/' + id,
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(() => {
          loadData();
        })
        .catch((err) => { console.log(err) })
    }

  }

  // =========================================================
  return (
    <div className=" my-products-container">
      <div className="d-flex justify-content-center">
        <h3 id="product-list-head">My-Products</h3>
      </div>
      {/* <Link to='/root-admin/add-product' className="btn btn-success" id='add-product-btn'>add product</Link> */}
      <NavLink to='/root-admin/add-product' className="btn btn-outline-primary ms-auto px-4 rounded-pill" id='add-product-btn'>
        <i className="me-2 fs-5"><AiFillPlusCircle/></i>Add-Product</NavLink>
      <div className='table-container'>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>No.</th>
              <th>product</th>
              <th>Name</th>
              <th>price</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length == 0 && (
              <tr>
                <td colSpan='5' className='text-center'>You have no products yet!</td>
              </tr>)}
            {products.map((product, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>
                  <img src={baseUrl + product.image} className='product-img' />
                </td>
                <td>{product.name}</td>
                <td>ETB {product.price}</td>
                <td>{product.createdAt}</td>
                <td>{product.updatedAt}</td>
                <td>
                  <div className='edit-delete-container'>
                    <Link to={`/root-admin/update-product/${product.id}`}>
                      <button className='btn btn-edit' id='btn-edit'>Update</button>
                    </Link>
                    <Link to='/root-admin'>
                      <button className='btn btn-delet' id='btn-delet' onClick={() => deleteProduct(product.id)}>Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
