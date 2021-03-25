import { loginStatus } from "../api";
import axios from "axios";
const isUserLoggedInAction = () => async (dispatch) => {
  let { data } = await axios.get(loginStatus(), { withCredentials: true });
  console.log("data", data);
  dispatch({ type: "USER_STATUS", payload: data });
};

export default isUserLoggedInAction;
