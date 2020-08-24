const AdditionalFeatureInitialState = {
    features: [
        {name: "Super fast", featureStatus: true},
        {name: "Red", featureStatus: false}
    ]
};

export const AddThatFeature = (state = AdditionalFeatureInitialState, action) => {
    switch (action.type) {
        case "ADD":
            const newFeature = { name: action.payload, featureStatus: false};
            return {...state, features: [...state.features, newFeature] };
            default:
                return state;
    }
};


