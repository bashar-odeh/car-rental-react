const initialState = {
  adminStatus: null,
  routeHolder: true,
};
const isAdminLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_STATUS":
      return { ...state, adminStatus: action.payload, routeHolder: false };
    case "END_ADMIN":
      return { ...state, adminStatus: null, routeHolder: true };

    default:
      return state;
  }
};

export default isAdminLoggedInReducer;
