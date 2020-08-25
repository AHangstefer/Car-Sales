import React from 'react';
//more efficient redux
import {connect } from "react-redux";
import {removeFeature} from "../actions/carActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {()=> props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

//more efficient redux
const mapDispatchtoProps = { removeFeature };


export default connect(null ,mapDispatchtoProps)(AddedFeature);

// {()=>} is at the beginning on the onclick so that
//the button doesn't click every time the page is rendered