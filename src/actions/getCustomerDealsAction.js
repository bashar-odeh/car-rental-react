import axios from "axios";
import { getCustomerDeals } from "../api";
const getAllCarsAction = () => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "LOADING_ALL_CUSTOMER_DEALS" });
  let { data } = await axios.get(getCustomerDeals(), {
    headers: headers,
    withCredentials: true,
  });
  dispatch({ type: "FETCHING_ALL_CUSTOMER_DEALS", payload: data });
};

export default getAllCarsAction;
