import axios from "axios";
import { signupAdmin } from "../api";

const signupAdminAction = (details) => async (dispatch) => {
  dispatch({ type: "SIGNING_ADMIN_UP" });
  let headers = {
    "Content-type": "application/josn",
  };
  let { data } = await axios.post(signupAdmin(), details, {
    headers: headers,
    withCredentials: true,
  });
  dispatch({ type: "ADMIN_SIGNUP", payload: data });
};

export default signupAdminAction;
