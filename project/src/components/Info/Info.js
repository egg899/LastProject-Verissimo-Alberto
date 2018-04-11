import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {BeerImage} from './beerImage';
import { Comment } from './Comments';

import CountUp, { startAnimation } from 'react-countup';
import './info.css';
import StarRatingComponent from 'react-star-rating-component';



export class Info  extends React.Component {

constructor(props){
  super(props);

  this.state = {

    comments: [],
    shown:true,
    rating: Math.ceil(Math.random() * Math.floor(5))
  }
}//constructor

handleCommentSubmission(event){
  event.preventDefault();
  const text=event.target[0].value;
  const comment = {owner:'Albert', text:text};

  event.target[0].value ='';
  const commented = this.state.comments
  commented.push(comment);

  this.setState({
    comments:commented
  });
}//handleCommentSubmission

onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }//onStartClick

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


         <div className="post__info">
                    <br/>

                   <h1 className="post__info-Center">  {this.props.name}</h1>
                       <div className="post__info-Details ">

                         {/* <img className="left image" width="7%" alt={beer.name} src={beer.image_url}/> */}
          <div className="left post__description post__info-Center">{this.props.description}</div>
                        <div onClick={this.toggle.bind(this)}><span ><BeerImage event={(event) => {
      startAnimation(this.myCountUp);
    }} className="right"  image_url={this.props.image_url} /></span></div>


                        <div className="post__info-Wrapper" style={hidden}>


                                         <div className="clear"></div>
                                         <div className="post__info-Ingredients left" >
                                         <h2>Ingredients</h2>
                                         <h3>Malt</h3>
                                        {this.props.ingredients.malt.map(item=>(
                                           <div>{item.name}: {item.amount.value} {item.amount.unit}</div>


                                         ))}{/*Malt*/}
                                <h3>Hops</h3>
                                      {this.props.ingredients.hops.map(item=>(
                                        <div>{item.name}: {item.amount.value} {item.amount.unit}</div>


                                        ))}{/*Hops*/}

                                        <h3>Yeast</h3>
                                       {this.props.ingredients.yeast}

              </div>{/*Post_info-Ingredients*/}

              <div className="post__info-foodPairing left">
                               <h2>Food Pairing</h2>

                               {this.props.food_pairing.map(food=>(
                                 <ul>
                                   <li>{food}</li>
                                 </ul>
                               ))}

                               <br/>
                           </div>{/*Food Pairing*/}

                           <div className=" post__info-counter left">

                            <h2>ABV: <CountUp

                                start={0}
                                end={this.props.abv}
                                duration={2.00}
                               useEasing={true}
                                useGrouping={true}
                                separator=" "
                                decimals={1}
                                decimal="."
                            suffix="%"
                            redraw={false}
                            ref={(countUp) => {
      this.myCountUp = countUp;
    }}
                              /></h2>


                            </div>{/*ABV counter*/}

       </div>{/**Post_info-Wrapper*/}
     </div>{/*Post_info-details*/}

<div className="post__comment">
     <div className="post__rating">
                           <h2>Rating from state: {rating}</h2>
                           <StarRatingComponent
                             name="rate1"
                             starCount={5}
                            value={rating}
                             onStarClick={this.onStarClick.bind(this)
                             }
                           />


                        </div>

                        {this.state.comments.map(comment =><Comment owner={comment.owner} text={comment.text}/>)}
                        <hr className="post__body-separator" />
                        <form onSubmit={(event)=>this.handleCommentSubmission(event)}>
                        <input placeholder="Add a comment" className="post__coment-input" />

                      </form>
                    </div>{/*post__comment*/}

   </div>{/*Post_info*/}
</CSSTransitionGroup>
</div>



    )
  }
}
