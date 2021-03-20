const initialState = {
  disableCustomer: null,
  disableCar: null,
  isDisablingCustomer: true,
  isDisablingCar: true,
};
const carDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISABLE_CUSTOMER":
      return {
        ...state,
        isDisablingCustomer: false,
        disableCustomer: action.payload,
      };
    case "END_DISABLE_CUSTOMER":
      return { ...state, isDisablingCustomer: true, disableCustomer: null };
    case "DISABLE_CAR":
      return {
        ...state,
        isDisablingCar: false,
        disableCar: action.payload,
      };
    case "END_DISABLE_CAR":
      return { ...state, isDisablingCar: true, disableCar: null };

    default:
      return state;
  }
};

export default carDataReducer;
