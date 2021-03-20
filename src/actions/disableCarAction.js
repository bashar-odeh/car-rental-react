import axios from "axios";
import { disableCar } from "../api";
import getAllCarsAction from "./getAllCarsAction";
const disableCarAction = (details) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "END_DISABLE_CAR" });
  let { data } = await axios.post(disableCar(), details, {
    headers: headers,
    withCredentials: true,
  });

  dispatch({ type: "DISABLE_CAR", payload: data });
  dispatch(getAllCarsAction());
};

export default disableCarAction;
