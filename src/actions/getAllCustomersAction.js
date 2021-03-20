import axios from "axios";
import { getAllCustomers } from "../api";
const getAllCustomersAction = () => async (dispatch) => {
  let { data } = await axios.get(getAllCustomers());
  dispatch({ type: "FETCHING_ALL_CUSTOMERS_CMS", payload: data });
};

export default getAllCustomersAction;
