import axios from "axios";
import { rentCar } from "../api";

const rentCarAction = (details) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "LOADING_RENTING_REQUEST" });
  let { data } = await axios.post(rentCar(), details, {
    headers: headers,
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "RENTING_CAR", payload: data });
};

export default rentCarAction;
