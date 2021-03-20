import axios from "axios";
import { getReports } from "../api";
const getReportsAction = (status) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  let { data } = await axios.get(
    getReports(),
    {
      params: {
        status,
      },
    },
    {
      headers: headers,
      withCredentials: true,
    }
  );
  console.log(data);
  dispatch({ type: "FETCHING_ALL_REPORTS", payload: data });
};

export default getReportsAction;
