// no action file was required

const initstate = {
  updateResponse: false,
};

const updateWishlistReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATING_WISHLIST_ITEM":
      return {
        ...state,
        updateResponse: action.payload,
      };
    case "LOADING_WISHLIST_ITEM":
      return {
        ...state,
        updateResponse: false,
      };
    default:
      return state;
  }
};

export default updateWishlistReducer;
