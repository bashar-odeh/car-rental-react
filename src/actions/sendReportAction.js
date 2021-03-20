import axios from "axios";
import { sendReport } from "../api";
const sendReportAction = (details) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  let { data } = await axios.post(sendReport(), details, {
    headers: headers,
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "SENDING_REPORTS", payload: data });
};

export default sendReportAction;
