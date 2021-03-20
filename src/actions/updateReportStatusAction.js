import axios from "axios";
import { updateReportStatus } from "../api";
const updateReportStatusAction = (report_id) => async (dispatch) => {
  let headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  let { data } = await axios.post(
    updateReportStatus(),
    { report_id },
    {
      headers: headers,
      withCredentials: true,
    }
  );

  dispatch({ type: "UPDATE_REPORT", payload: data });
};

export default updateReportStatusAction;
