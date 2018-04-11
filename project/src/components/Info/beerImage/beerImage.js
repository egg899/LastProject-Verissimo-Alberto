import React from 'react';
import './beerImage.css'

export const BeerImage = (props) => (
  <img  onClick={props.event} className=" image beer" width="7%" alt={props.name} src={props.image_url} />
);
