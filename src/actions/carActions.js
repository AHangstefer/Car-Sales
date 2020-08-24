import {ADD_FEATURE, REMOVE_FEATURE} from "../reducers/carReducer"

export const removeFeature = feature =>{
    dispatch({type: REMOVE_FEATURE, payload: feature});
  };
  
export const buyItem = feature =>{
    dispatch({type: ADD_FEATURE, payload: feature});
  };