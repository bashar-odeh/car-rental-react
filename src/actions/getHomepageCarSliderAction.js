import axios from "axios";
import { homepageCarsSlider } from "../api";
const getHomepageCarSliderAction = () => async (dispatch) => {
  dispatch({ type: "LOADING_AND_FETCHING_ALL_CARS_HOMEPAGE" });
  let { data } = await axios.get(homepageCarsSlider());
  console.log(data);
  dispatch({ type: "FETCHING_ALL_CARS_HOMEPAGE", payload: data });
};

export default getHomepageCarSliderAction;
