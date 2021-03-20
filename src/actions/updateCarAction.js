import axios from "axios";
import { upateCar } from "../api";

const updateCarAction = (details) => async (dispatch) => {
  dispatch({ type: "UPDATEING_CAR" });
  let headers = {
    "Content-type": "application/josn",
  };
  let { data } = await axios.post(upateCar(), details, {
    headers: headers,
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "UPDATE_CAR", payload: data });
};

export default updateCarAction;
