import axios from "axios";
import { getReports } from "../api";
const getArchive = (status) => async (dispatch) => {
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

  dispatch({ type: "FETCHING_ALL_ARCHIVE", payload: data });
};

export default getArchive;
