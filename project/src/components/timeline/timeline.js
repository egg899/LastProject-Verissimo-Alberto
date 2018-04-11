import React, { Component } from 'react';
import {Info, Form} from '../../components';
import './timeline.css'




export class Timeline extends React.Component {

constructor(props){
  super(props);
  this.state = {
    beerType:[],
    pending:false,




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
        <center><img width="150" className="logo" src="https://www.buysmart.org.uk/cdn/scale/340/340/brand-logo/1501054085-11b58021123c9b1865ef76f0a5f9edba.png" /></center>
  <div >    <Form pending={this.state.pending}
        searchBeer={(e)=>this.searchBeer(e)}
        searchBarBeer={(e)=>this.searchBarBeer(e)}

      /></div>
<br/>

<div className="timeline">
  
{posts.map(post =>(

  <Info
name={post.name}
description={post.description}
image_url={post.image_url}
ingredients={post.ingredients}
food_pairing={post.food_pairing}
abv={post.abv}
ebc={post.ebc}
ibu={post.ibu}
ph={post.ph}
attenuation_level={post.attenuation_level}
srm={post.srm}
  />
))}


</div>{/*timeline*/}

      </div>
    );
  }
}
