const initialState = {
  isLoading: true,
  response: null,
  isLoadingCar: true,
  carResponse: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    // customer
    case "CUSTOMER_SIGNUP": {
      return {
        ...state,
        isLoading: true,
        response: action.payload,
      };
    }
    case "SIGNING_CUS_UP": {
      return { ...state, isLoading: false, response: false };
    }
    case "END_SIGNING_CUS_UP": {
      return { ...state, isLoading: true, response: null };
    }
    //car
    case "CAR_SIGNUP": {
      return {
        ...state,
        isLoadingCar: true,
        carResponse: action.payload,
      };
    }
    case "SIGNING_CAR_UP": {
      return { ...state, isLoadingCar: false, carResponse: false };
    }
    case "END_SIGNING_CAR_UP": {
      return { ...state, isLoadingCar: true, carResponse: null };
    }
    default:
      return state;
  }
};

export default signupReducer;
