import React, { Component } from 'react';
import {Info, Form} from '../../components';
import './timeline.css'




export class Timeline extends React.Component {

constructor(props){
  super(props);
  this.state = {
    beerType:[],
    pending:false,
    appUsed:false,
    show:false,
    showb:false



  };

  this.toggleDiv =this.toggleDiv.bind(this);
  this.toggleDivb =this.toggleDivb.bind(this);
}//constructor
/***Toggle Searc Bars***/
toggleDiv = ()=>{
  const {show} = this.state;
  const {showb} = this.state;
  this.setState({show:!show, showb:false})
}//toggleDiv
toggleDivb = ()=>{
  const {showb} = this.state;
  const {show} = this.state;
  this.setState({showb:!showb, show:false})
}//toggleDiv


searchBeerByAbv(e) {
  e.preventDefault();
  const number=e.target[0].value;
  const patt1=/[0-9]/g;
  if(!patt1.test(number)){
    alert("Add a value");
  }else{

    const api='https://api.punkapi.com/v2/beers?abv_lt='+ number;
    this.setState({
        beerType:[],
        pending:true,
        appUsed:true


    })
    fetch(api).then(response => response.json()).then((data) =>{
      this.setState({
          beerType:data,
          pending:false,

      });
    })


  }//else


}//searchBeerByAbv
/*** End of Toggle Searc Bars***/

searchBeerByName(name) {
  const api='https://api.punkapi.com/v2/beers?beer_name='+ name;
  this.setState({
      beerType:[],
      pending:true,
      appUsed:true


  })
  fetch(api).then(response => response.json()).then((data) =>{
    this.setState({
        beerType:data,
        pending:false
    });
  })}//searchBeerByName


searchBarBeer(e){
  e.preventDefault();
  if(e.target[0].value===""){
    alert("add a value");
  }else{
    this.searchBeerByName(e.target[0].value);
  }
console.log(this.state.beerType);
}//searchBarBeer





searchBeer(e){
  e.preventDefault();
  this.searchBeerByName(e.target.value);





console.log(this.state.beerType);





}//searchBeer




  render() {
    const posts=this.state.beerType;

    return (
      <div >

        {/* <form onSubmit={(e)=>this.searchBarBeer(e)}>
          <input /><button /> <br />
        </form> */}
        <div className="timeline__header">
        <center><img width="150" className="logo" src="https://www.buysmart.org.uk/cdn/scale/340/340/brand-logo/1501054085-11b58021123c9b1865ef76f0a5f9edba.png" /></center>
      </div>
  <div className="timeline__form">

  <span className="btn">  <button onClick={this.toggleDiv}>Search Beer By Name</button><br/></span>
<span className="btn">  <button onClick={this.toggleDivb}>Search Beer by ABV</button><br/></span>
    {this.state.show && <Box searchBarBeer={(e)=>this.searchBarBeer(e)} />}
    {this.state.showb && <Boxb searchBarBeer={(e)=>this.searchBeerByAbv(e)} />}

    <Form pending={this.state.pending}
        searchBeer={(e)=>this.searchBeer(e)}
        searchBarBeer={(e)=>this.searchBarBeer(e)}
        searchBeerByAbv={(e)=>this.searchBeerByAbv(e)}
        beerType={this.state.beerType}
        appUsed={this.state.appUsed}

      />


    </div>


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


class Box extends Component {
  render(){
    return(
      <form onSubmit= {this.props.searchBarBeer}>
      <input /> <button>Search By Name</button><br />
    </form>
    )
  }
}

class Boxb extends Component {
  render(){
    return(
      <form onSubmit= {this.props.searchBarBeer}>
      <input /> <button>Search By ABV</button><br />
    </form>
    )
  }
}
