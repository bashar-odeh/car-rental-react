// no action file was required

const initstate = {
  token: null,
};

const tokenReducer = (state = initstate, action) => {
  switch (action.type) {
    case "token":
      return {
        ...state,
        token: action.payload,
      };
    case "remove_token":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default tokenReducer;
