import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseUrl } from '../constants'
import axios from 'axios'
import { appContext } from '../App'

function Loginn() {

  const [error, setError] = useState(false)
  const [inputStatus, setInputStatus] = useState(false)
  const { setToken } = useContext(appContext)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // Handle inputs
  const haddleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }
  // handdle submit
  const onSubmit = async (event) => {
    event.preventDefault();
    // Store Object data into the variable
    const { email, password } = user;
    if (email && password) {
      let response = await axios({
        method: 'post',
        url: baseUrl + '/api/login',
        data: {
          email, password
        }
      })
      console.log(response.data)
      if (response.data.success) {
        localStorage.setItem('shiromeda', response.data.token)
        setToken(response.data.token)
        navigate('/root-admin')
      } else {
        setError(true)
      }
    } else {
      setInputStatus(true)
    }
  }

  return (
    <div style={{paddingTop: '50px'}}>
      <div className="container my-5 shadow">
        <div className="row">
          <div className="col-md-5 py-3 d-flex flex-column align-items-center justify-content-center text-white form">
            <h1 className="display-4 fw-bold">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials to Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink to='/register' className='btn btn-outline-light rounded-pill pb-2 w-50'>Register</NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bold mb-5">LOGIN</h1>
            <div className='danger-alert'>
              {error && <p style={{ padding: '10px', fontStyle: 'italic' }}>Incorrect email or password</p>}
              {inputStatus && <p style={{ padding: '10px', fontStyle: 'italic' }}>Fill all the provided spaces</p>}
            </div>
            <form onSubmit={onSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={haddleInput} />
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={haddleInput} />
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginn;