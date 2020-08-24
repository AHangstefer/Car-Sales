export const ADD_FEATURE ="ADD_FEATURE";
export const REMOVE_FEATURE  = "REMOVE_FEATURE";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};


export const carReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FEATURE: 
            //action.payload = additionalFeature object/(this is payload)
            return {...state,
                car: {...state.car, features: [...state.car.features, action.payload ]},
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id),
                additionalPrice: state.additionalPrice + action.payload.price
            };
        case REMOVE_FEATURE:
            return  {
                ...state,
                car: {...state.car,
                     features: state.car.features.filter(feature=> feature.id !== action.payload.id)
                    },
                additionalFeatures: [...state.additionalFeatures, action.payload],
                additionalPrice: state.additionalPrice - action.payload.price
            };
        default:
           return state;
    }
}

//car in removefeature is overriding what's alreayd written in state.car. We're copying state.car by saying 
//car:... state.car, then adjusting features: by copying features state.car.features, and then adding new
//values bye calling action.payload which are the new values

//whenever you call dispatch, that's when the values are passed in and it's like calling a function
// in that when you call dispatch its dispatch({type: WHERE, payload: VALUE}). Two arguments
//being assigned. 
