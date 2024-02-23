// import { appContext } from './App'
// import { useContext, useRef } from 'react'
// import { BiSolidCartDownload } from 'react-icons/bi'
// import { BsArrowBarUp } from 'react-icons/bs'
// import logo from './mproducts-logo.png'

// import { NavLink, useNavigate } from 'react-router-dom'

// function Header() {
//     const { token, setToken, counter } = useContext(appContext)
//     const navigate = useNavigate()

//     // ========================================
//     const handleUpload = () => {
//         navigate('/register')
//     }


//     return (
//         <header>
//             <div className='logo-container'>
//                 <NavLink to='/' >
//                     <img src={logo} alt="" />
//                 </NavLink>
//             </div>
//             <div className='link-container'>
//                 <div class="cart-icon">
//                     <NavLink to='/'>Shop</NavLink>
//                     <NavLink to='/cart'>
//                         <i class="fa fa-cart-plus">
//                             <BiSolidCartDownload />
//                             <span className='counter'>{counter}</span>
//                         </i>
//                     </NavLink>
//                     <span className='upload-container'>
//                         <button onClick={handleUpload} className='upload-btn'>Upload / See Your Products</button>
//                     </span>
//                 </div>
//                 <div className='down-links-container'>

//                     {token ? (
//                         <>
//                             <NavLink to='/add-product'>Add-Product</NavLink>
//                             <NavLink to='/my-products'>My-Products</NavLink>
//                             <button onClick={() => {
//                                 localStorage.removeItem('shiromeda')
//                                 setToken(null)
//                                 navigate('/login')
//                             }} className='btn-logout'>
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <NavLink to='/login'>Login</NavLink>
//                             <NavLink to='/register'>Register</NavLink>
//                         </>
//                     )
//                     }
//                     <button className='remove-btn'><span className='remove'><BsArrowBarUp /></span></button>
//                 </div>


//             </div>
//         </header>
//     )
// }

// export default Header