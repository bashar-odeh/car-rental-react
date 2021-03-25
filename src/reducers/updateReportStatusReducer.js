// no action file was required

const initstate = {
  response: false,
  isUpdating: true,
};

const updateCustomerReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_REPORT":
      return {
        ...state,
        isUpdating: false,
        response: action.payload,
      };
    case "UPDATEING_REPORT":
      return {
        ...state,
        isUpdating: true,
        response: false,
      };
    default:
      return state;
  }
};

export default updateCustomerReducer;
