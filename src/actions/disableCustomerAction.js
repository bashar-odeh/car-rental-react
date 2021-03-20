import axios from "axios";
import { disableCustomer } from "../api";
import getAllCustomersAction from "./getAllCustomersAction";

const disableCustomerAction = (details) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "END_DISABLE_CUSTOMER" });
  let { data } = await axios.post(disableCustomer(), details, {
    headers: headers,
    withCredentials: true,
  });
  dispatch({ type: "DISABLE_CUSTOMER", payload: data });
  dispatch(getAllCustomersAction());
};

export default disableCustomerAction;
