import React, { Component } from 'react';
import './App.css';
import Menubar from './js/Menubar';
import Welcome from './js/Welcome';
import About from './js/About';
import Store from './js/Store';
import Contact from './js/Contact';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showCart: false,
      cartItemNumber: 0
    };
  }
  openCartWindow = ()=>{
    this.setState({showCart: true});
  }
  closeCartWindow = ()=>{
    this.setState({showCart: false});
  }
  updateCartItemNumber = (plusOrMinus, num)=>{
    let newNum = this.state.cartItemNumber;
    if(plusOrMinus==="plus"){
      newNum += num;
    }
    else if(plusOrMinus==="minus"){
      newNum -= num;
    }
    this.setState({cartItemNumber: newNum})
  }
  render(){
    return (
      <div className="App">
      <Menubar openCartWindow={this.openCartWindow} cartItemNumber={this.state.cartItemNumber}/>
      <Welcome />
      <About />
      <Store showCart={this.state.showCart} closeCartWindow={this.closeCartWindow} cartItemNumber={this.state.cartItemNumber} updateCartItemNumber={this.updateCartItemNumber} />
      <Contact />
    </div>
    );
  }
}

export default App;
