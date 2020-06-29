import React, { Component } from 'react';
import '../css/Popup.css';
import '../css/Common.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNumber: 1
    };
  }
  plus = (e)=>{
    let newNum = this.state.itemNumber+1;
    e.currentTarget.previousElementSibling.value = newNum;
    this.setState({itemNumber: newNum});
  }
  minus = ()=>{
    if(this.state.itemNumber!==1){
      this.setState({itemNumber: this.state.itemNumber-1});
    }
  }
  updateNumber = (e)=>{
    this.setState({itemNumber: parseInt(e.target.value)});
  }

  render() {
    let URL = `img/${this.props.cakeDetail.url}`;
    return (
      <div className="detailWindow">
        <div className="item-detail-container">
          <span className="close-button" onClick={this.props.closePopup}><i className="fa fa-close"></i></span>
          <div className="item-detail">
            <div className="item-info">
              <p className="item-name">{this.props.cakeDetail.name}</p>
              <div className="wrap">
                <p className="item-price">$&nbsp;{this.props.cakeDetail.price}</p>
                <div className="item-number-container">
                  <span className="minus-plus" onClick={this.minus}><i className="fa fa-minus"></i></span>
                  <input type="number" min="1" max="99" className="input-number" value={this.state.itemNumber} disabled></input>
                  <span className="minus-plus" onClick={this.plus}><i className="fa fa-plus"></i></span>
                </div>
              </div>
              <a className="button cartBtn" onClick={(e)=>this.props.addToCart(e, this.props.cakeDetail, this.state.itemNumber)}>Add to cart</a>
            </div>
            <div className="item-img">
              <img src={URL} alt="pic" />
            </div>
          </div>
          <div>
            <span className="item-descrip">Description:&nbsp;</span>
            <span className="font-gray">{this.props.cakeDetail.description}</span>
          </div>
          <div>
            <span className="item-descrip">Ingredients:&nbsp;</span>
            <span className="font-gray">{this.props.cakeDetail.ingredients}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;