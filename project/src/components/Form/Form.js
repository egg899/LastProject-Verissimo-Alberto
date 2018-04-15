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
    </div>
    )

}}
