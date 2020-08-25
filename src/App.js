import React, {useReducer} from 'react';
//import {carReducer ,ADD_FEATURE, REMOVE_FEATURE, initialState} from "./reducers/carReducer"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


//redux
import {connect} from "react-redux";
//import {removeFeature, buyItem} from "./actions/carActions";

//more efficient redux >>
// remove {useReducer}
// remove carReducer
// remove actions
// remove props from App 
// import connect to other components, starting with Header




const App = (props) => {

//const [state, dispatch] = useReducer( carReducer, initialState);
//we could destructure the useReducer and only get car out of the initial state const [{car}, dispatch]
// if we used {car}, all the values below in return would start with car.
//thie state object below is what we're importing and state thats in useReducer. 
//useReducer needs to be at the top level so that all item using props can use it. 
//WHEN USING REDUX, WE DONT NEED USEREDUCER
//in order to connect anything, we use import connect

  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  // const removeFeature = feature =>{
  //   dispatch({type: REMOVE_FEATURE, payload: feature});
  // };
  
  // const buyItem = feature =>{
  //   dispatch({type: ADD_FEATURE, payload: feature});
  // };

  return (
    <div className="boxes">
      <div className="box">
        
        {/* <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
         */}

         {/* redux >>> */}
        {/* <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} /> */}

         {/* More efficient redux >>> */}
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        {/* <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
        redux */}

        {/* redux >>> */}
         {/* <AdditionalFeatures buyItem={props.buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} /> */}

        {/* More efficient redux */}
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};


//redux >>>

// const mapStateToProps = state =>{
//   return state;
// };

// const mapDispatchToProps ={
//   removeFeature, 
//   buyItem
// };

//removed mapStateToProps for more efficient redux

//redux >>
//export default connect(mapStateToProps, mapDispatchToProps)(App);


//more efficient redux >>
export default App;


//redux 
// removeFeature is the same as bc we have a key removeFeature: removeFeature
// can also be written:
// const connectHOF= connect(mapStateToProps, mapDispatchToProps)
// export default connectHOF(App);

//more efficient redux
//removed connect form App
//removed mapStateToProps and mapDispatchToProps for more efficient redux