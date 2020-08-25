import React from 'react';
import {connect } from "react-redux";
import AddedFeatureActions from "../actions/addedFeatureActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {()=> props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

// {()=>} is at the beginning on the onclick so that
//the button doesn't click every time the page is rendered