import axios from "axios";
import { signupCar } from "../api";

const signupCarAction = (details) => async (dispatch) => {
  dispatch({ type: "SIGNING_CAR_UP" });
  let headers = {
    "Content-type": "application/josn",
  };
  let { data } = await axios.post(signupCar(), details, {
    headers: headers,
    withCredentials: true,
  });

  dispatch({ type: "CAR_SIGNUP", payload: data });
};

export default signupCarAction;
