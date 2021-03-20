const initialState = {
  wishlist: [],
  isLoadingWishlist: true,
};
const getWishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHINF_WISHLIST":
      return {
        ...state,
        isLoadingWishlist: false,
        wishlist: action.payload,
      };
    case "LOADING_WISHLIST":
      return { ...state, isLoadingWishlist: true, wishlist: [] };
    default:
      return state;
  }
};

export default getWishlistReducer;
