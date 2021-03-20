// no action file was required

const initstate = {
  isUserLogged: false,
  error: false,
  wrongInput: false,
};

const loggingInReducer = (state = initstate, action) => {
  switch (action.type) {
    case "USER_LOGGING_IN":
      return {
        ...state,
        isUserLogged: action.payload.isloggedin,
        error: action.payload.error,
        wrongInput: action.payload.wrongInput,
        disabled: action.payload.disabled,
      };
    case "CHECKING_LOGIN_DATA":
      return {
        ...state,
        isUserLogged: false,
        requestStatus: false,
        wrongInput: false,
      };
    default:
      return state;
  }
};

export default loggingInReducer;
