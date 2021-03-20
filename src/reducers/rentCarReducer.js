const initialState = {
  rentResponse: false,
  isLoadingRequest: true,
};
const rentCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RENTING_CAR":
      return {
        ...state,
        isLoadingRequest: false,
        rentResponse: action.payload,
      };

    case "LOADING_RENTING_REQUEST":
      return { ...state, isLoadingRequest: true, rentResponse: null };

    default:
      return state;
  }
};

export default rentCarReducer;
