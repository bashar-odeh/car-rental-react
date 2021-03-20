const initialState = {
  isLoadingDeals: true,

  deals: [],
  declainedDeals: [],
  acceptedDeals: [],
};
const getAllCustomers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_DEALS_CMS":
      return {
        ...state,
        isLoadingDeals: false,
        deals: action.payload.deals,
        declainedDeals: action.payload.declinedDeals,
        acceptedDeals: action.payload.acceptedDeals,
      };

    case "LOADING_AND_FETCHING_ALL_DEALS_CMS":
      return {
        ...state,
        isLoadingDeals: true,
        deals: [],
        declainedDeals: [],
        acceptedDeals: [],
      };

    default:
      return state;
  }
};

export default getAllCustomers;
