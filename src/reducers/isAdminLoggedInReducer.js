const initialState = {
  adminStatus: null,
};
const isAdminLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_STATUS":
      return { ...state, adminStatus: action.payload, state: true };
    case "END_ADMIN":
      return { ...state, adminStatus: null };

    default:
      return state;
  }
};

export default isAdminLoggedInReducer;
