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
      payload: response.data,
    });
    console.log(response.data);
    dispatch(isUserLoggedInAction());
  } catch (error) {
    console.log(error);
  }
};

export default loggingInAction;
