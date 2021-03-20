import axios from "axios";
import { getDeals } from "../api";
const getAllCarsAction = (type) => async (dispatch) => {
  dispatch({ type: "LOADING_AND_FETCHING_ALL_DEALS_CMS" });

  const urls = [getDeals("not"), getDeals("accept"), getDeals("declined")];
  const request = urls.map((url) => axios.get(url).catch((err) => null));
  let [deals, acceptedDeals, declinedDeals] = await axios.all(request);
  console.log(deals);
  dispatch({
    type: "FETCHING_ALL_DEALS_CMS",
    payload: {
      deals: deals.data,
      acceptedDeals: acceptedDeals.data,
      declinedDeals: declinedDeals.data,
    },
  });
};

export default getAllCarsAction;
