import { appContext } from './App'
import { useContext, useRef } from 'react'
import {BiSolidCartDownload} from 'react-icons/bi'
import {BsArrowBarUp} from 'react-icons/bs'
import logo from './mproducts-logo.png'

import { NavLink, useNavigate } from 'react-router-dom'

function HeaderAdmin(){
    const {token, setToken, counter} = useContext(appContext)
    const navigate= useNavigate()

    const navLinks = useRef()
    const menubar = ()=>{
        navLinks.current.style.left = '0';
    }
    const removeLinks = ()=>{
        navLinks.current.style.left = '-146px';
    }
    
    return (
        <header>
            <div className='logo-container'>
                <NavLink to='/' >
                   <img src={logo} alt=""/>
                </NavLink>  
            </div>      
            <div className='link-container'>
                <div class="cart-icon">
                    <NavLink to='/'>Shop</NavLink>
                    <NavLink to='/order'>Order</NavLink>
                    <span className='upload-container'>
                      {
                        token ?(
                            <button onClick={() => {
                               localStorage.removeItem('shiromeda')
                               setToken(null)
                               navigate('/login')
                           }} className='btn-logout'>
                               Logout
                           </button>
                        ):''
                      } 
                    </span>
                </div>
                {/* <div ref={navLinks} className='down-links-container'>
            
                { token ? (
                    <>
                        <NavLink to='/add-product'>Add-Product</NavLink>
                        <NavLink to='/my-products'>My-Products</NavLink>
                        <button onClick={() => {
                            localStorage.removeItem('shiromeda')
                            setToken(null)
                            navigate('/login')
                        }} className='btn-logout'>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </>
                )
                }
                  <button onClick={removeLinks} className='remove-btn'><span className='remove'><BsArrowBarUp/></span></button>
                </div> */}
               
                
            </div>
       </header>
    )
}

export default HeaderAdmin