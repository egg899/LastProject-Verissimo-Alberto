import React from 'react';
import './Form.css';

export class Form extends React.Component {
  

  render(){
    return(
      <form className="form">

      <input type="button" value="Punk Ipa" onClick={this.props.searchBeer}/>
        <input type="button" value="Dead Pony Club" onClick={this.props.searchBeer}/>
        <input type="button" value="Jet Black Heart" onClick={this.props.searchBeer}/>

      </form>
    )
  }//render

}
