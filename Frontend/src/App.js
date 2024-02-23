import React, {useState, useRef, useEffect} from 'react';
import {createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Root from './Root';
import MyProducts from './Components/MyProducts'
import AddProduct from './Components/AddProduct'
import HomePage from './Components/HomePage'
import Checkout from './Components/Checkout'
import Cart from './Components/Cart';
import UpdateProduct from './Components/UpdateProduct';
import RootAdmin from './RootAdmin';
import Order from './Components/Order';
import Register from './Components/Register';
import Loginn from './Components/Loginn';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

export const appContext = createContext()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    let _token = localStorage.getItem('shiromeda')
    if(_token){
      setToken(_token)
    }
  }, [])
  // ===============================================================
  const [cartItems, setCartItems] = useState([]);
  // const [counter, setCounter] = useState(0);

  // ========================================================================
  const handdleAddProduct = (product) =>{
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...productExist, quantity: productExist.quantity + 1} : item))
    }else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
    // setCounter(counter => counter + 1);
  }
// ============================================================================
  const handdleRemoveProduct = (product)=>{
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }
    else{
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...productExist, quantity: productExist.quantity - 1} : item))
    }
    // setCounter(counter => counter - 1);
  }
 // =========================================================
    const removeAddedProduct = (product)=>{
      setCartItems(cartItems.filter((item) => item.id !== product.id))
  }
// ===========================================================================
let counter = cartItems.reduce((quantity, item) => quantity +  item.quantity, 0);
// ================================================================================
let totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0);
// ===============================================================================
  const deletCartItem = ()=>{
    setCartItems([])
    // setCounter(0);
  }

   return (
    <appContext.Provider value={{token, setToken, counter, handdleAddProduct , cartItems, totalPrice, deletCartItem, handdleRemoveProduct, removeAddedProduct}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='login' element={<Loginn/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Route>
          <Route path='/root-admin' element={<RootAdmin/>}>
            <Route path='/root-admin/' element={<MyProducts/>}/>
            <Route path='/root-admin/add-product' element={<AddProduct/>}/>
            <Route path='/root-admin/update-product/:id' element={<UpdateProduct/>}/>
          </Route>
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </appContext.Provider>

  )
}

export default App;
