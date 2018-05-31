import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import Routes from './Routes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      class: ''
    }
    this.addNew = this.addNew.bind(this)
    this.close = this.close.bind(this)
  }

  addNew(){ 
    this.setState({class:'slide-down'})
  }

  close(){
    this.setState({class:''},()=>console.log('xxx'))
  }

  render() {
    return (
      <div className="App">
        <Nav onClick={this.addNew}/>
        <Routes class={this.state.class} close={this.close}/>
      </div>
    );
  }
}

export default App;
