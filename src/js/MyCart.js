import React from 'react';
import '../css/MyCart.css';
import '../css/Popup.css';
import '../css/Common.css';
import CartItem from './CartItem.js';

const MyCart = (props) => (
    <div className="detailWindow">
      <div className="cart-container">
        <span className="close-button" onClick={props.closeCartWindow}><i className="fa fa-close"></i></span>
        <p className='title-left cart-title'>Shopping<span className='title-right cart-title'> Cart</span></p>
        {(props.cartItemNumber === 0) ? <p className="empty-text"> Your cart is empty.</p> :
          <>
            <div className="shopping-list">
              {
                props.shoppingList.map(item => {
                  console.log(item);
                  return (
                    <CartItem key={item.name} item={item} minus={props.minus} plus={props.plus} />
                  )
                })
              }
            </div>
            <div className="subTotal">Subtotal: $<span>{props.subTotal}</span></div>
            <a className="button">Checkout</a>
          </>}
      </div>
    </div>
  );

export default MyCart;