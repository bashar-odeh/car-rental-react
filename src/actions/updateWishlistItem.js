import axios from "axios";
import { updateWishlist } from "../api";
const updateWishlistItem = (type, car_id) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  dispatch({ type: "LOADING_WISHLIST_ITEM" });
  let { data } = await axios.post(
    updateWishlist(),
    { type, car_id },
    {
      headers: headers,
      withCredentials: true,
    }
  );

  dispatch({ type: "UPDATING_WISHLIST_ITEM", payload: data });
};

export default updateWishlistItem;
