import axios from "axios";
import { getWishlist } from "../api";
const getWishlistAction = () => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "LOADING_WISHLIST" });
  let { data } = await axios.get(getWishlist(), {
    headers: headers,
    withCredentials: true,
  });
  dispatch({ type: "FETCHINF_WISHLIST", payload: data });
};

export default getWishlistAction;
