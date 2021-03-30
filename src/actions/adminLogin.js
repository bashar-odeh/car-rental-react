import axios from "axios";

import { adminloginURL } from "../api";
import isAdminLoggedInAction from "./isAdminLoggedInAction";
const adminLogin = (data) => async (dispatch) => {
  try {
    let headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
    let response = await axios.post(adminloginURL(), data, {
      headers: headers,
      withCredentials: true,
    });
    dispatch({
      type: "ADMIN_LOGGING_IN",
      payload: response.data,
    });
    dispatch(isAdminLoggedInAction());
  } catch (error) {}
};

export default adminLogin;
