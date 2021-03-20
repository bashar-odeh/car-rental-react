import axios from "axios";
import { updateCustomer } from "../api";

const updateCustomerAction = (details) => async (dispatch) => {
  dispatch({ type: "UPDATEING_CUSTOMER" });
  let headers = {
    "Content-type": "application/josn",
  };
  let { data } = await axios.post(updateCustomer(), details, {
    headers: headers,
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "UPDATE_CUSTOMER", payload: data });
};

export default updateCustomerAction;
