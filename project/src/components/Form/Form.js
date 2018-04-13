import React, { Component } from 'react';

import {BeerLoader} from '../../components';
import './Form.css';

export class Form extends Component {
  

  render(){


 return(
  <div>

      <form  className="form">


      <input type="button" value="Punk Ipa" onClick={this.props.searchBeer}/>
        <input type="button" value="Dead Pony Club" onClick={this.props.searchBeer}/>
        <input type="button" value="Jet Black Heart" onClick={this.props.searchBeer}/>

      </form>
<br/>
      {this.props.pending ? <BeerLoader/> : ''}
    </div>
    )

}}
