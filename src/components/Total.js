import React from 'react';
import {connect} from "react-redux";

const Total = props => {
  return (
    <div className="content">
      {/* before more efficient redux */}
      {/* <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4> */}
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>

    </div>
  );
};


// more efficinet redux

const mapStateToProps = state => {
  return{
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
};

export default connect(mapStateToProps, null)(Total);
