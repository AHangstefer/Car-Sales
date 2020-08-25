import React from 'react';

import AddedFeature from './AddedFeature';
//more efficient redux>>
import {connect} from "react-redux";
import {removeFeature} from "../actions/carActions";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//more efficient redux >>

const mapStateToProps = state => {
  return{
    features: state.car.features
  }
};

//moving to using connect for lower componenets
// const mapDispatchToProps = {
//   removeFeature
// }

export default connect(mapStateToProps, null)(AddedFeatures);

//alternatively, for default, could write:
// export default connect(state => {features: state.car.features}, {removeFeatures })(AddedFeatures)
//and wouldn't need mapStateToProps or mapDispatchToProps

//This was redux before more efficient redux

// {props.car.features.length ? (
//   <ol type="1">
//     {props.car.features.map(item => (
//       <AddedFeature  removeFeature={props.removeFeature}  key={item.id} feature={item} />


