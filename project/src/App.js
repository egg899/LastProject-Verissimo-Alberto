import React, { Component } from 'react';
import {Form, Info} from './components';
import './App.css';



class App extends Component {

constructor(props){
  super(props);
  this.state = {
    beerType:[],



  };
}//constructor



searchBeer(e){
  e.preventDefault();
  const name= e.target.value;
  const api='https://api.punkapi.com/v2/beers?beer_name='+ name;

this.setState({
    beerType:[],



})


  fetch(api).then(response => response.json()).then((data) =>{

    this.setState({
        beerType:data,


    });





console.log(this.state.beerType);


})//fetch


}//searchBeer




  render() {
    return (
      <div className="App">

      <Form searchBeer={(e)=>this.searchBeer(e)}/>
<br/>
      <Info
        beerType={this.state.beerType}

      />

      </div>
    );
  }
}

export default App;
