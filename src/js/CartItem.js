import React from 'react';
import '../css/CartItem.css';
import '../css/Common.css';

const CartItem = (props) => {
  let URL = `img/${props.item.url}`;
  return (
    <div className="cake-info" key={props.item.name}>
      <div className="cake-img">
        <img src={URL} alt="pic" />
      </div>
      <p className="cake-name">{props.item.name}</p>
      <p className="cake-price">$&nbsp;{props.item.price}</p>
      <div className="cake-number-container">
        <span className="minus-plus" onClick={()=>{props.minus(props.item)}}><i className="fa fa-minus"></i></span>
        <input type="number" min="1" max="99" className="input-number" value={props.item.number} disabled></input>
        <span className="minus-plus" onClick={()=>{props.plus(props.item, 1)}}><i className="fa fa-plus"></i></span>
      </div>
    </div>
  );
}

export default CartItem;