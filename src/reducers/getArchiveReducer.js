const initialState = {
  archive: [],
  isLoadingArchive: true,
};
const getReportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_ARCHIVE":
      return {
        ...state,
        isLoadingArchive: false,
        archive: action.payload,
      };

    case "LOADING_AND_FETCHING_ARCHIVE":
      return { ...state, isLoadingArchive: true, archive: [] };

    default:
      return state;
  }
};

export default getReportsReducer;
