import React from 'react';
import AdditionalFeature from './AdditionalFeature';
//more efficient redux>>
import {connect} from "react-redux";
import {buyItem} from "../actions/carActions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


//more efficient redux >>
const mapStateToProps = state => { return { features: state.additionalFeatures}};

//const mapDispatchToProps =  {buyItem};
//this was still passing props bc the information in the lower components is "harder"
//to access

export default connect(mapStateToProps, null)(AdditionalFeatures);

//return before more efficient redux

// {props.additionalFeatures.length ? (
//   <ol type="1">
//     {props.additionalFeatures.map(item => (
//       <AdditionalFeature buyItem={props.buyItem} key={item.id} feature={item} />
//     ))}
