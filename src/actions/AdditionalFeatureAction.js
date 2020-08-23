export const addFeature = feature => {
    console.log("add feature action");
    return {type: "ADD", payload: feature};
};