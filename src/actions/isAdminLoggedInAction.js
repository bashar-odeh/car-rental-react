import { checkAdminLogin } from "../api";
import axios from "axios";
const isAdminLoggedInAction = () => async (dispatch) => {
  let { data } = await axios.get(checkAdminLogin(), { withCredentials: true });
  dispatch({ type: "ADMIN_STATUS", payload: data });
};

export default isAdminLoggedInAction;
