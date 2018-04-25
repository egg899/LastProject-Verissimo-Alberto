import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export class Comment extends React.Component   {
  render(){
    return(
      <div>
        <b>{this.props.owner}</b> {this.props.text}<br/>
        <StarRatingComponent
         name="rate1"
         starCount={5}
        value={this.props.rating}



       />

      </div>
    )


  }
};
