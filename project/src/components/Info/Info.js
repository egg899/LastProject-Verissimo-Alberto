import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {BeerImage} from './beerImage';
import { Comment } from './Comments';
import CountUp from 'react-countup';
import './info.css';
import StarRatingComponent from 'react-star-rating-component';



export class Info  extends React.Component {

constructor(){
  super();

  this.state = {
    shown:true,
    rating: 1
  }
}//constructor

onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

toggle(){
  this.setState({
    shown: !this.state.shown,
  })

}//toggle

  render(){

 const { rating } = this.state;

const shown = {
  //display: this.state.shown ? "block" : "none",
  opacity:this.state.shown ? 1 : 0,

  height:this.state.shown ? "100%" :"0"
}

const hidden = {
//display: this.state.shown ? "none" : "block",
opacity:this.state.shown ? 0 : 1,

  height:this.state.shown ? "0" :"100%"
}


    return(

      <div className="post">

        <CSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>


      {
        this.props.beerType.map((beer) => (
          <div className="post__info">
          <br/>

          <h1 className="post__info-Center">  {beer.name}</h1>
              <div className="post__info-Details ">
                {/* <img className="left image" width="7%" alt={beer.name} src={beer.image_url}/> */}
<div className="left description post__info-Center">{beer.description}</div>
              <span onClick={this.toggle.bind(this) }><BeerImage className="right"  image_url={beer.image_url} /></span>


<div className="post__info-Wrapper" style={hidden}>


                <div className="clear"></div>
                <div className="post__info-Ingredients left" >
                <h2>Ingredients</h2>
                <h3>Malt</h3>
                {beer.ingredients.malt.map(item=>(
                  <div>{item.name}: {item.amount.value} {item.amount.unit}</div>


                ))}{/*Malt*/}
                <h3>Hops</h3>
                {beer.ingredients.hops.map(item=>(
                  <div>{item.name}: {item.amount.value} {item.amount.unit}</div>


                ))}{/*Hops*/}
                <h3>Yeast</h3>
                {beer.ingredients.yeast}
              </div>{/*ingredients*/}

              <div className="post__info-foodPairing left">
                <h2>Food Pairing</h2>

                {beer.food_pairing.map(food=>(
                  <ul>
                    <li>{food}</li>
                  </ul>
                ))}

                <br/>
              </div>{/*Food Pairing*/}

              <div className=" post__info-counter left">



<h2>ABV: <CountUp

    start={0}
    end={beer.abv}
    duration={2.00}
    useEasing={true}
    useGrouping={true}
    separator=" "
    decimals={1}
    decimal="."
suffix="%"
redraw={false}
  /></h2>

  <div>
         <h2>Rating from state: {rating}</h2>
         <StarRatingComponent
           name="rate1"
           starCount={5}
           value={rating}
           onStarClick={this.onStarClick.bind(this)}
         />
       </div>
</div>{/*ABV counter*/}
                <div className="clear"></div>
</div>{/*post_info-wrapper*/}

              </div>{/*post__info-details*/}




          </div>/*post__info*/


      ))/*Map*/

    }




    </CSSTransitionGroup>

  </div>//Post

    )
  }
}
