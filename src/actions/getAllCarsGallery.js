import axios from "axios";
import { getAllCarsGallery } from "../api";
const getAllCarsAction = () => async (dispatch) => {
  dispatch({ type: "FETCHING_ALL_CARS_GALLERY" });
  let { data } = await axios.get(getAllCarsGallery());
  console.log(data);
  dispatch({ type: "LOADING_AND_FETCHING_ALL_CARS_GALLERY", payload: data });
};

export default getAllCarsAction;
