import axios from "axios";
import { handleRent } from "../api";
import getDealsAction from "./getDealsAction";
const handleDeal = (deal_id, type) => async (dispatch) => {
  console.log(type, deal_id);
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  let { data } = await axios.post(
    handleRent(),
    { deal_id, type },
    {
      headers: headers,
      withCredentials: true,
    }
  );
  dispatch(getDealsAction());
  console.log(data);
};

export default handleDeal;
