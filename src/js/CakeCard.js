import React from 'react';
import '../css/CakeCard.css';
import '../css/Common.css';

const CakeCard = (props) => {
  let URL = `img/${props.cake.url}`;
  return (
    <div className='card' onClick={() => {
      props.showPopup(props.cake)
    }}>
      <div className="img-section">
        <img src={URL} alt="pic" />
      </div>
      <p className="name">{props.cake.name}</p>
      <div className="price-section">
        <p className="price">$&nbsp;{props.cake.price}</p>
      </div>
      <a className="button cartBtn" onClick={(e)=>props.addToCart(e, props.cake, 1)}>Add to cart</a>
    </div>
  );
}

export default CakeCard;