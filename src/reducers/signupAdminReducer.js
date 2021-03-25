const initialState = {
  isLoading: true,
  response: false,
};

const signupAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    // customer
    case "ADMIN_SIGNUP": {
      return {
        ...state,
        isLoading: true,
        response: action.payload,
      };
    }
    case "SIGNING_ADMIN_UP": {
      return { ...state, isLoading: false, response: false };
    }

    default:
      return state;
  }
};

export default signupAdminReducer;
