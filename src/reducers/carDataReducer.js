const initialState = {
  carData: [],
  isLoadingCarData: true,
};
const carDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHINF_CAR_DATA":
      return {
        ...state,
        isLoadingCarData: false,
        carData: action.payload,
      };
    case "LOADING_CAR_DATA_AND_RESET":
      return { ...state, isLoadingCarData: true, carData: [] };
    default:
      return state;
  }
};

export default carDataReducer;
