import { useContext } from "react";
import { appContext } from "../App";
import { baseUrl } from '../constants'

function Cart() {
  const {cartItems, handdleAddProduct, handdleRemoveProduct, deletCartItem, totalPrice} = useContext(appContext);

  return ( 
    <div className="cart-container">
       <div className="cart-items">
        <div className="cart-items-header">
          Your Cart
        </div>
        
        <div>
          {cartItems.length === 0 && (
            <div className="cart-item-empty">
              Empty Cart
            </div>
          )}
        </div>

        <div className="item-list-container">
          {cartItems.map((item) =>(
            <div key={item.id} className="cart-items-list">
              <img src = {baseUrl + item.image} className="cart-items-image"/>
              <div className="cart-item-price">{item.quantity*item.price} <span style={{fontStyle: 'italic',fontSize: '11px'}}>ETB</span></div>  
              <div className='cart-product-quantity-controler'>
                <button 
                  className="cart-items-add" 
                  onClick={() => handdleAddProduct(item)}>
                    +
                </button>
                <button className="cart-items-quantity">{item.quantity}</button>
                <button 
                  className="cart-items-remove" 
                  onClick={() => handdleRemoveProduct(item)}>
                    <div className='minus'></div>
                </button>
              </div>
            </div>
          ) )}
        
          
        </div>
        <div className="total-price-container">
          <div className='total-price-detail'>
            <div className="cart-item-total-price-title">
              Total Price:
            </div>
            <div className="cart-item-total-price">
              {totalPrice} <span style={{fontStyle: 'italic',fontSize: '11px'}}>ETB</span>
            </div>
            </div>
            <button type='submit' className='buy-btn'>Checkout</button>
        </div>
        <button className="removeItem" onClick={deletCartItem}>
            x
        </button>
      </div>
    </div>
   );
}

export default Cart;