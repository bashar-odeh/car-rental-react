import axios from "axios";
import { getAllCars } from "../api";
const getAllCarsAction = () => async (dispatch) => {
  let { data } = await axios.get(getAllCars());
  dispatch({ type: "FETCHING_ALL_CARS_CMS", payload: data });
};

export default getAllCarsAction;
