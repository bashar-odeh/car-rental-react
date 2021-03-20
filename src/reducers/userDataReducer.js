const initialState = {
  userData: {},
  fetchingUserData: false,
};
const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHINF_USER_DATA":
      return { ...state, fetchingUserData: true, userData: action.payload };
    case "LOADING_USER_DATA_AND_RESET":
      return { ...state, fetchingUserData: false, userData: {} };
    default:
      return state;
  }
};

export default userDataReducer;
