import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants'

function Register() {
  const navigate = useNavigate()
  const [inputStatus, setInputStatus] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  // Handle inputs
  const haddleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  async function onSubmit(event) {
    event.preventDefault()
    // destructuring the object
    const { name, email, password } = user;

    if (name && email && password) {
      let response = await axios({
        method: 'post',
        url: baseUrl + '/api/register',
        data: {
          name, email, password
        }
      })
      if (response.data.success) {
        alert('Successfully created!')
        navigate('/login')
      }
    } else {
      setInputStatus(true)
    }
  }
  return (
    <div style={{paddingTop: '50px'}}>
      <div className="container my-5 shadow">
        <div className="row justify-content-end">
          <div className="col-md-5 py-3 d-flex flex-column align-items-center justify-content-center text-white form order-2">
            <h1 className="display-4 fw-bold">Hellow, Friend</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink to='/login' className='btn btn-outline-light rounded-pill pb-2 w-50'>Login</NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bold mb-5">REGISTER</h1>
            <div className='danger-alert'>
              {inputStatus && <p style={{ padding: '10px', fontStyle: 'italic' }}>Fill all the provided spaces</p>}
            </div>
            <form onSubmit={onSubmit} method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp"
                  name="name" value={user.name} onChange={haddleInput} />

                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={haddleInput} />

                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                  name="password" value={user.password} onChange={haddleInput} />
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;