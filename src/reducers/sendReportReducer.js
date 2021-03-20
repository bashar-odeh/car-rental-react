const initialState = {
  reportResponse: false,
  isSendingReport: true,
};
const sendReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SENDING_REPORTS":
      return {
        ...state,
        isSendingReport: false,
        reportResponse: action.payload,
      };
    case "IS_SENDING_REPORTS":
      return { ...state, isSendingReport: true, reportResponse: false };
    default:
      return state;
  }
};

export default sendReportReducer;
