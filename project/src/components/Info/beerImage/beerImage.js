import React from 'react';
import './beerImage.css'
export const BeerImage = (props) => (
  <img className=" image beer" width="7%" alt={props.name} src={props.image_url} />
);
