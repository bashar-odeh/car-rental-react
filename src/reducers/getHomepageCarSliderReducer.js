const initialState = {
  cars: [],
  isLoadingHomepageCars: true,
};
const getHomepageCarSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_CARS_HOMEPAGE":
      return {
        ...state,
        isLoadingHomepageCars: false,
        cars: action.payload,
      };

    case "LOADING_AND_FETCHING_ALL_CARS_HOMEPAGE":
      return { ...state, isLoadingHomepageCars: true, cars: [] };

    default:
      return state;
  }
};

export default getHomepageCarSliderReducer;
