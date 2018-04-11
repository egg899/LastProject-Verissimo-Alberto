import React from 'react';
import {BeerLoader} from '../../components';
import './Form.css';

export const Form = (props)=> (
  <div>

      <form className="form">

      <input type="button" value="Punk Ipa" onClick={props.searchBeer}/>
        <input type="button" value="Dead Pony Club" onClick={props.searchBeer}/>
        <input type="button" value="Jet Black Heart" onClick={props.searchBeer}/>

      </form>
<br/>
      {props.pending ? <BeerLoader/> : ''}
    </div>
    )
