const initialState = {
  isLoadingDeals: true,
  allDeals: [],
};
const getAllCustomers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_CUSTOMER_DEALS":
      return {
        ...state,
        isLoadingDeals: false,
        allDeals: action.payload,
      };

    case "LOADING_ALL_CUSTOMER_DEALS":
      return { ...state, isLoadingDeals: true, allDeals: [] };

    default:
      return state;
  }
};

export default getAllCustomers;
