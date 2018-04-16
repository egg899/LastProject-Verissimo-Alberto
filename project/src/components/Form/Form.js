import React, { Component } from 'react';

import {BeerLoader} from '../../components';
import './Form.css';


const types = [
  'Punk Ipa',
  'Dead Pony Club',
  'Jet Black Heart'

];
export class Form extends Component {


  render(){


 return(
  <div>

      <form  className="form">
{types.map(type =>(
  <input type="button" value={type} onClick={this.props.searchBeer}/>
))}

      {/* <input type="button" value="Punk Ipa" onClick={this.props.searchBeer}/>
        <input type="button" value="Dead Pony Club" onClick={this.props.searchBeer}/>
        <input type="button" value="Jet Black Heart" onClick={this.props.searchBeer}/> */}

      </form>

      {this.props.pending ? <BeerLoader/> : ''}

      {(this.props.beerType.length===0 && this.props.appUsed && !this.props.pending) ?
        <div className="post__notFound">
          <img className="homer" src="https://i.pinimg.com/originals/3a/11/68/3a116884945f870924f1ffd3f36fc015.png"/>
        <p>Nothing was Found man!!!!!</p>
      </div>:''
    }

    </div>
    )

}}
