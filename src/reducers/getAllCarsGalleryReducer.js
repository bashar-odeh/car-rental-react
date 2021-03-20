const initialState = {
  isLoadingAllcarsGallery: true,
  allCarsGallery: [],
};
const getAllCustomers = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_AND_FETCHING_ALL_CARS_GALLERY":
      return {
        ...state,
        isLoadingAllcarsGallery: false,
        allCarsGallery: action.payload,
      };

    case "FETCHING_ALL_CARS_GALLERY":
      return { ...state, isLoadingAllcarsGallery: true, allCarsGallery: [] };

    default:
      return state;
  }
};

export default getAllCustomers;
