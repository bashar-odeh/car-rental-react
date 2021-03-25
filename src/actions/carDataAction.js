import axios from "axios";
import { carData } from "../api";

const carDataAction = (car_id) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };

  let { data } = await axios.post(
    carData(),
    { car_id },
    {
      headers: headers,
      withCredentials: true,
    }
  );
  dispatch({ type: "FETCHINF_CAR_DATA", payload: data });
};

export default carDataAction;
