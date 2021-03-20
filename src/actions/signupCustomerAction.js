import axios from "axios";
import { signupCustomer } from "../api";

const signupCustomerAction = (details) => async (dispatch) => {
  dispatch({ type: "SIGNING_CUS_UP" });
  let headers = {
    "Content-type": "application/josn",
  };
  let { data } = await axios.post(signupCustomer(), details, {
    headers: headers,
    withCredentials: true,
  });
  dispatch({ type: "CUSTOMER_SIGNUP", payload: data });
};

export default signupCustomerAction;
