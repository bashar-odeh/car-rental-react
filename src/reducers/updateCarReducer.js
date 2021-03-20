// no action file was required

const initstate = {
  updated: null,
};

const updateCarReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_CAR":
      return {
        ...state,
        updated: action.payload,
      };
    case "UPDATEING_CAR":
      return {
        ...state,
        updated: null,
      };
    default:
      return state;
  }
};

export default updateCarReducer;
