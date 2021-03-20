// no action file was required

const initstate = {
  updated: null,
  isUpdating: true,
};

const updateCustomerReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_CUSTOMER":
      return {
        ...state,
        isUpdating: false,
        updated: action.payload,
      };
    case "UPDATEING_CUSTOMER":
      return {
        ...state,
        isUpdating: true,
        updated: null,
      };
    default:
      return state;
  }
};

export default updateCustomerReducer;
