const initialState = {
  reports: [],
  isLoadingReports: true,
};
const getReportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_REPORTS":
      return {
        ...state,
        isLoadingReports: false,
        reports: action.payload,
      };

    case "LOADING_AND_FETCHING_REPORTS":
      return { ...state, isLoadingReports: true, reports: [] };

    default:
      return state;
  }
};

export default getReportsReducer;
