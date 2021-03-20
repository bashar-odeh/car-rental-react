import { combineReducers } from "redux";
// reducers
import loggingInReducer from "./loggingInReducer";
import isUserLoggedInReducer from "./isUserLoggedInReducer";
import signupCustomerReducer from "./signupCustomerReducer";
import userDataReducer from "./userDataReducer";
import getAllCustomersReducer from "./getAllCustomersReducer";
import carDataReducer from "./carDataReducer";
import getAllCarsGalleryReducer from "./getAllCarsGalleryReducer";
import getHomepageCarSliderReducer from "./getHomepageCarSliderReducer";
import updateCarReducer from "./updateCarReducer";
import updateCustomerReducer from "./updateCustomerReducer";
import disableReducer from "./disableReducer";
import getWishlistReducer from "./getWishlistReducer";
import updateWishlistReducer from "./updateWishlistReducer";
import getDealsReducer from "./getDealsReducer";
import getCustomerDealsReducer from "./getCustomerDealsReducer";
import getReportsReducer from "./getReportsReducer";
import sendReportReducer from "./sendReportReducer";
import rentCarReducer from "./rentCarReducer";
import getArchiveReducer from "./getArchiveReducer";
import updateReportStatusReducer from "./updateReportStatusReducer";

const rootReducer = combineReducers({
  userLogin: loggingInReducer,
  userStatus: isUserLoggedInReducer,
  signupCustomer: signupCustomerReducer,
  userDetails: userDataReducer,
  getAllCustomers: getAllCustomersReducer,
  carData: carDataReducer,
  getAllCarsGallery: getAllCarsGalleryReducer,
  getHomepageCarSlider: getHomepageCarSliderReducer,
  updateCar: updateCarReducer,
  updateCustomer: updateCustomerReducer,
  disable: disableReducer,
  getWishlist: getWishlistReducer,
  updateWishlist: updateWishlistReducer,
  getDeals: getDealsReducer,
  getCustomerDeals: getCustomerDealsReducer,
  getReports: getReportsReducer,
  sendReport: sendReportReducer,
  rentCar: rentCarReducer,
  getArchive: getArchiveReducer,
  updateReportStatus: updateReportStatusReducer,
});
export default rootReducer;
