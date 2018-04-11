import React, { Component } from 'react';
import {Info, Form} from '../../components';
import './timeline.css'




export class Timeline extends React.Component {

constructor(props){
  super(props);
  this.state = {
    beerType:[],
    pending:false,
    beerName:[]



  };
}//constructor

searchBarBeer(e){
  e.preventDefault();
  if(e.target[0].value===''){
    alert('Add value');
  }
  else{
  const name= e.target[0].value;


  const api='https://api.punkapi.com/v2/beers?beer_name='+ name;

this.setState({
    beerType:[],
    pending:true


})


  fetch(api).then(response => response.json()).then((data) =>{

    this.setState({
        beerType:data,
        pending:false

    });








})}//fetch
}//searchBarBeer





searchBeer(e){
  e.preventDefault();
  const name= e.target.value;
  const api='https://api.punkapi.com/v2/beers?beer_name='+ name;

this.setState({
    beerType:[],
    pending:true


})


  fetch(api).then(response => response.json()).then((data) =>{

    this.setState({
        beerType:data,
        pending:false

    });





console.log(this.state.beerType);


})//fetch


}//searchBeer




  render() {
    const posts=this.state.beerType;

    return (
      <div >

        {/* <form onSubmit={(e)=>this.searchBarBeer(e)}>
          <input /><button /> <br />
        </form> */}
        <center><img className="logo" src="https://www.brewdog.com/images/newshop/logo.png" /></center>
      <Form pending={this.state.pending}
        searchBeer={(e)=>this.searchBeer(e)}
        searchBarBeer={(e)=>this.searchBarBeer(e)}

      />
<br/>


{posts.map(post =>(

  <Info
name={post.name}
description={post.description}
image_url={post.image_url}
ingredients={post.ingredients}
food_pairing={post.food_pairing}
abv={post.abv}
  />
))}
{/* <Info
  beerType={posts}
/> */}
{/* {
  posts.map(post =>(
    <Info
      beerType={posts}

      description={post.description}


    />


  ))



} */}



      </div>
    );
  }
}
