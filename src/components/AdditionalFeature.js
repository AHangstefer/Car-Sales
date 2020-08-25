import React from 'react';

// experimenting by myself
//import {connect} from "react-redux";
//import {AddFeature} from "../actions/additionalFeatureAction.js"

//more efficient redux
import {connect } from "react-redux";
import {buyItem} from "../actions/carActions";





const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {()=> props.buyItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


//more efficient redux
export default connect(null, {buyItem})(AdditionalFeature);
