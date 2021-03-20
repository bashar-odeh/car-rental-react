const initialState = {
  isLoadingAllCustomers: true,
  isLoadingAllcars: true,
  allCustomers: [],
  allCars: [],
};
const getAllCustomers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_CUSTOMERS_CMS":
      return {
        ...state,
        isLoadingAllCustomers: false,
        allCustomers: action.payload,
      };

    case "LOADING_AND_FETCHING_ALL_CUSTOMERS_CMS":
      return { ...state, isLoadingAllCustomers: true, allCustomers: [] };

    case "FETCHING_ALL_CARS_CMS":
      return {
        ...state,
        isLoadingAllcars: false,
        allCars: action.payload,
      };

    case "LOADING_AND_FETCHING_ALL_CARS_CMS":
      return { ...state, isLoadingAllcars: true, allCustomers: [] };

    default:
      return state;
  }
};

export default getAllCustomers;
