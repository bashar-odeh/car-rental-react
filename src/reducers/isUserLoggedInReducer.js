const initialState = {
  userStatus: false,
};
const isUserLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_STATUS":
      return { ...state, userStatus: action.payload };

    default:
      return state;
  }
};

export default isUserLoggedInReducer;
