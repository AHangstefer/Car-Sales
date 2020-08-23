export const removeFeature = remove => {
    console.log("added feature action");
    return {type: "REMOVE", payload: remove};
};