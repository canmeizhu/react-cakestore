import React, { Component } from 'react';
import '../css/Store.css';
import '../css/Common.css';
import CakeCard from './CakeCard';
import Popup from './Popup';
import MyCart from './MyCart';
import items from '../items.json';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      cakes: items,
      showPopup: false,
      showCart: false,
      cakeDetail: {},
      shoppingList: [],
      subTotal: 0
    };
  }
  // filter event when click "ALL, CLASSIC, SEASONAL, PIES, INDIVIDUAL" buttons
  filter = (e) => {
    let filterText = e.target.innerText.toLocaleLowerCase();
    if (filterText === "all") {
      this.setState({ cakes: items })
    }
    else {
      let filterResult = items.filter(item => item.type.toLocaleLowerCase() === filterText);
      this.setState({ cakes: filterResult });
    }
  }
  //search event when customer enters specific text in the search input box
  search = (e) => {
    let searchText = e.target.value.toLocaleLowerCase();
    let searchResult = items.filter(item => item.name.toLocaleLowerCase().includes(searchText));
    this.setState({ cakes: searchResult });
  }
  //show the detail window for the selected cake
  showPopup = (cake) => {
    this.setState({ showPopup: true, cakeDetail: cake });
  }
  //close the detail window
  closePopup = () => {
    this.setState({ showPopup: false });
  }
  closeCart = () => {
    this.setState({ showCart: false });
  }

  //click the "Add to Cart" button
  addToCart = (e, cake, num) => {
    e.stopPropagation();
    //If the cake is already in the shopping cart
    let findCake = this.state.shoppingList.find(item => item.name === cake.name);
    if (findCake) {
      this.plus(findCake, num);
    }
    //If the cake is not in the shopping cart
    else {
      cake["number"] = num;
      this.setState({ shoppingList: [...this.state.shoppingList, cake] });
      this.updateSubTotal("plus", (parseFloat(cake.price) * num).toFixed(2));
    }
    this.props.updateCartItemNumber("plus", num);
    this.closePopup();
  }

  //click the "+" button on the Mycart window
  plus = (item, num) => {
    let currentNum = item.number + num;
    let currentItem = { ...item, ...{ "number": currentNum } };
    this.updateItemNumber(currentItem);
    this.updateSubTotal("plus", (parseFloat(item.price) * num).toFixed(2));
    this.props.updateCartItemNumber("plus", num);
  }

  //click the "-" button on the Mycart window
  minus = (item) => {
    if (item.number !== 1) {
      let currentNum = --item.number;
      let currentItem = { ...item, ...{ "number": currentNum } };
      this.updateItemNumber(currentItem);
    }
    else {
      this.deletItem(item);
    }
    this.updateSubTotal("minus", item.price);
    this.props.updateCartItemNumber("minus", 1);
  }

  updateItemNumber = (currentItem) => {
    let tempShoppingList = this.state.shoppingList.map(cake => {
      if (cake.name === currentItem.name) {
        return currentItem;
      } else {
        return cake;
      }
    });
    this.setState({ shoppingList: tempShoppingList });
  }

  updateSubTotal = (plusOrMinus, price) => {
    if (plusOrMinus === "plus") {
      this.setState({
        subTotal: parseFloat((this.state.subTotal + parseFloat(price)).toFixed(2))
      });
    }
    else {
      this.setState({
        subTotal: parseFloat((this.state.subTotal - parseFloat(price)).toFixed(2))
      });
    }
  };

  deletItem = (item) => {
    if (this.state.shoppingList.length === 0) {
      this.setState({ shoppingList: [] });
    }
    else {
      let delIndex = this.state.shoppingList.indexOf(item);
      debugger;
      let tempShoppingList = [...this.state.shoppingList];
      tempShoppingList.splice(delIndex, 1);
      this.setState({ shoppingList: tempShoppingList });
    }
  }

  render() {
    return (
      <div id='store'>
        <p className='title-left'>Our<span className='title-right'> Store</span></p>
        <div className='buttons'>
          <a className="button" onClick={this.filter}>ALL</a>
          <a className="button" onClick={this.filter}>SEASONAL</a>
          <a className="button" onClick={this.filter}>CLASSIC</a>
          <a className="button" onClick={this.filter}>PIES</a>
          <a className="button" onClick={this.filter}>INDIVIDUAL</a>
        </div>
        <div className='search'>
          <span className="search-icon"><i className="fa fa-search"></i></span>
          <input type="text" id="search-text" placeholder='item....' onChange={this.search}></input>
        </div>
        <div className='items-container'>
          {this.state.cakes.map(cake => (<CakeCard key={cake.name} cake={cake} showPopup={this.showPopup} addToCart={this.addToCart} />))}
        </div>
        {this.state.showPopup && <Popup cakeDetail={this.state.cakeDetail} closePopup={this.closePopup} addToCart={this.addToCart} />}
        {this.props.showCart && <MyCart shoppingList={this.state.shoppingList} minus={this.minus} plus={this.plus} subTotal={this.state.subTotal} closeCartWindow={this.props.closeCartWindow} cartItemNumber={this.props.cartItemNumber} />}
      </div>
    )
  }
}

export default Store;