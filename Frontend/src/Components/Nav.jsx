import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../mproducts-logo.png'
import { appContext } from '../App'
import { useContext, useRef } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'
import { BiRegistered } from 'react-icons/bi'
import { LuView } from 'react-icons/lu'
import { AiFillPlusCircle} from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'
import { FaDAndDBeyond } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { AiOutlineBorderlessTable } from 'react-icons/ai'
import { AiFillShop } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { FiUpload } from 'react-icons/fi'

function Navbar() {

  const { token, setToken, counter } = useContext(appContext)
  const navigate = useNavigate()

  const menuList = useRef();

  const menu = () => {
    menuList.current.style.left = '0';
  }
  const hideMenu = () => {
    menuList.current.style.left = '-240px';
  }
  return (
    <div className='nav-container'>
      {!token ? (
        <>
          <nav className="navbar navbar-expand-lg shadow">
            <div className="container">

              <div className="nav-bar-contents">

                <div className='logo-container'>
                  <span onClick={menu} id='list-menu'>
                    <i className="me-2 fs-3"><AiOutlineMenuUnfold /></i>
                  </span>
                  <div className='logo'>
                    <NavLink to='/shop' >
                      <img src={logo} alt="" />
                    </NavLink>
                  </div>
                </div>

                <div ref={menuList} className="hiden-links">

                  <span onClick={hideMenu} className='hide-menu' id='list-menu'>
                    <i className="me-2 fs-5"><FaAngleDoubleLeft /></i>
                  </span>

                  <ul className="ul">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        <i className="me-2 fs-5"><BiHome /></i>Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        <i className="me-2 fs-5"><FaDAndDBeyond /></i>About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop">
                        <i className="me-2 fs-5"><AiFillShop /></i>Shop
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        <i className="me-2 fs-5"><BiSolidContact /></i>Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/login' className="nav-link">
                        <i className="me-2 fs-5"><BiLogIn /></i>Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/register' className="nav-link">
                        <i className="me-2 fs-5"><BiRegistered /></i>Register
                      </NavLink>
                      <NavLink to='/register' className="btn btn-outline-success mt-2 px-2 rounded-pill">
                      <i className="me-2 fs-5"><FiUpload /></i>Upload-Product
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div style={{display: 'flex'}}>
                  <div className='upload-container'>
                    <NavLink to='/shop' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                      <i className="me-2 fs-5"><AiFillShop /></i>Shop
                    </NavLink>
                    <NavLink to='/register' className="btn btn-outline-success ms-2 px-4 rounded-pill">
                      <i className="me-2 fs-5"><FiUpload /></i>Upload-Product
                    </NavLink>
                  </div>
                  <NavLink to='/cart' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                    <i className="me-2 fs-5"><FiShoppingCart /></i>{counter}
                  </NavLink>
                </div>
               
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container">

            <div className="nav-bar-contents">
                <div className='logo-container'>
                  <span onClick={menu} id='list-menu'>
                    <i className="me-2 fs-3"><AiOutlineMenuUnfold /></i>
                  </span>
                  <div className='logo'>
                    <NavLink to='/shop' >
                      <img src={logo} alt="" />
                    </NavLink>
                  </div>
                </div>
                <div ref={menuList} className="hiden-links">

                  <span onClick={hideMenu} className='hide-menu' id='list-menu'>
                    <i className="me-2 fs-5"><FaAngleDoubleLeft /></i>
                  </span>

                  <ul className="ul">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/order">
                        <i className="me-2 fs-5"><AiOutlineBorderlessTable /></i>Orders
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        <i className="me-2 fs-5"><AiFillPlusCircle /></i>Add-Product
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">
                        <i className="me-2 fs-5"><LuView /></i>My-Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login"
                        onClick={() => {
                          localStorage.removeItem('shiromeda')
                          setToken(null)
                          navigate('/login')
                        }}>
                        <i className="me-2 fs-5"><BiLogOut /></i>Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <button type="submit"
                  onClick={() => {
                    localStorage.removeItem('shiromeda')
                    setToken(null)
                    navigate('/login')
                  }}
                  class="btn btn-danger ms-auto px-4 rounded rounded-pill">
                  <i className="me-2 fs-5"><BiLogOut /></i>Logout
                </button>
              </div>
            </div>
          </nav>
        </>
      )}

    </div>
  );
}

export default Navbar;