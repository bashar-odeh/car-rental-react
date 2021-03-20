import axios from "axios";

import { loginURL } from "../api";
import isUserLoggedInAction from "./isUserLoggedInAction";
const loggingInAction = (data) => async (dispatch) => {
  dispatch({ type: "CHECKING_LOGIN_DATA" });
  try {
    let headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
    let response = await axios.post(loginURL(), data, {
      headers: headers,
      withCredentials: true,
    });
    dispatch({
      type: "USER_LOGGING_IN",
      payload: {
        error: response.data.error,
        isloggedin: response.data.isloggedin,
        wrongInput: response.data.wrongInput,
        disabled: response.data.disabled,
      },
    });
    dispatch(isUserLoggedInAction());
  } catch (error) {
    console.log(error);
  }
};

export default loggingInAction;
