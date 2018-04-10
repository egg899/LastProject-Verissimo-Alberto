import React, { Component } from 'react';
import {Info} from '../../components/Info';
import {Form} from '../../components/Form';
//import './App.css';



export class Timeline extends React.Component {

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
    const posts=this.state.beerType;

    return (
      <div >

      <Form searchBeer={(e)=>this.searchBeer(e)}/>
<br/>

{posts.map(post =>(
  <Info
name={post.name}
description={post.description}
image_url={post.image_url}
ingredients={post.ingredients}
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
