# LastProject-Verissimo-Alberto

#Brewdog Beer Reviewer

In this project I took the craft beer company Brewdog and I made an app which the user would be able to look for a beer and check the information about the beer he/she was looking for. Also, the user will be able to rate the beer and comment on it. I created several components to be used ultimately exported to the App.js. The first component is the info.js. In this component I added all the info(props) that is needed to retrieve the information from the API. The user will be able to click on a beer image and get all the information necessary. Other important component is the Form.js. In that file are all the buttons and the search bars needed to look for the beer the user is interested. The user will have the choice to find the beer by name, letters or simply by ABV levels. Those 2 components are exported to the timeline.js. From the timeline.js all the API is retrieved and some animations takes place suck as fade ins and the burger menu effect that is needed when the application goes mobile. Also, there is a loader image that is shown when the page is loading the information and an error image which is the the form.js when the information is not found. Then the timeline.js is exported to the App.js.

Getting Started
-Install Hombrew in your computer -Install Node.js -Open Atom -Go to Preferences: -Install linter packages -Install linter-eslint -Install babel language -Go to your terminal and open the directory where you want your project to be

Example:
cd document
Then type

Example:
npx create-react-app my-app(this last part is the name of the app, you may call it whatever you want)
A react project will start downloading

In your terminal type:


cd my-app(or any other name you wanted)
Hit enter and finally type

npm start
and your project will appear in your browser

Prerequisites
First you have to import all the components that you will be using in the timeline.js compoent:

import React, { Component } from 'react';
import {Info, Form} from '../../components';
...

For this project you will need to call the BREWDOG Beer API availabel in this link: https://punkapi.com/documentation/v2

This is an example of how it was used in this project in the timeline.js component

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
I stored the api information in the placeholder 'data' as you see in this example, then I placed it inside the 'beertype' array.All this is inside a function called 'searchBeerByName'.

Then inside of the render I placed the beertype state inside of a 'const' and then I ran a map method to display the information.

const posts=this.state.beerType;

...

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
I am using the Info.js component and using the props of that component to display the information.

<div className="post__info">
           <br/>

          <h1 className="post__info-Center">  {this.props.name}</h1>
              <div className="post__info-Details ">

                {/* <img className="left image" width="7%" alt={beer.name} src={beer.image_url}/> */}
 <div className="left post__info-description post__info-Center">{this.props.description}
   <br/>
     <p style={shown} className="left post__info-message"><strong>Click on the image for more information &#x21E8;</strong></p>
 </div>

     <br/>


               <div><span><BeerImage event= {this.toggle.bind(this)}
className="right"  image_url={this.props.image_url} /></span>

</div>{/*BeerImage*/}

.....</div>
I am also calling the Form.js component to display the the button that will get the values from the props in that component to be displayed on the screen.

<Form pending={this.state.pending}
    searchBeer={(e)=>this.searchBeer(e)}
    beerType={this.state.beerType}
    appUsed={this.state.appUsed}

  />
It also has two more components where it lays the two search bars that i am using called Box and Boxb.

<Box searchBarBeer={(e)=>this.searchBarBeer(e)} />
<Boxb searchBarBeer={(e)=>this.searchBeerByAbv(e)} />
Installing other extra components(StarRatingComponent, countup and Comment)
Other components that i installed were the start rating component

npm install react-star-rating-component --save
Example:

import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
The countUp component

npm install react-countup --save
Example:

import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';

const onComplete = () => {
  console.log('Completed! 👏');
};

const onStart = () => {
  console.log('Started! 💨');
};

render(
  <CountUp
    className="account-balance"
    start={160527.0127}
    end={-875.0319}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
    decimals={4}
    decimal=","
    prefix="EUR "
    suffix=" left"
    onComplete={onComplete}
    onStart={onStart}
  />,
  document.getElementById('root'),
);
These are some extra features as well as the Comment.js component in the Info.js components which was hand-coded:

import React from 'react';

export const Comment = (props) => (
  <div>
    <b>{props.owner}</b> {props.text}<br/>

  </div>
);
import { Comment } from './Comments';



this.state = {

  comments: []
  ...
}
.....

handleCommentSubmission(event){
 event.preventDefault();
 const text=event.target[0].value ;
 const comment = {owner:'Albert', text:text};

 event.target[0].value ='';
 const commented = this.state.comments
 commented.push(comment)




 this.setState({
   comments:commented
 });
}//handleCommentSubmission

This is How I call the function

<form>

{this.state.comments.map(comment =><Comment owner={comment.owner} text={comment.text}/>)}
<hr className="post__body-separator" />
<form onSubmit={(event)=>this.handleCommentSubmission(event) }>
<input  placeholder="Add a comment" className="post__coment-input" />

</form>
