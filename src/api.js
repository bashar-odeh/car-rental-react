const base_url = "http://localhost/car-rental";

//login
export const loginURL = () => `${base_url}/login/login.php`;
export const adminloginURL = () => `${base_url}/login/adminLogin.php`;
export const checkAdminLogin = () => `${base_url}/login/checkAdminLogin.php`;
export const loginStatus = () => `${base_url}/login/checklogin.php`;
export const logoutURL = () => `${base_url}/login/logout.php`;

//customer
export const signupCustomer = () => `${base_url}/customers/signupCustomer.php`;
export const userDetails = () => `${base_url}/customers/getAllCustomerData.php`;
export const updateCustomer = () => `${base_url}/customers/updateCustomer.php`;
export const toggleWishlist = () => `${base_url}/customers/toggleWishlist.php`;
export const updateWishlist = () => `${base_url}/customers/updateWishlist.php`;
export const sendReport = () => `${base_url}/customers/sendReports.php`;
export const getCustomerDeals = () =>
  `${base_url}/customers/getCustomerDeals.php`;
export const rentCar = () => `${base_url}/customers/rentCar.php`;
export const getWishlist = () =>
  `${base_url}/customers/getCustomerWishlist.php`;
//cars
export const carData = () => `${base_url}/cars/getAllCarData.php`;
export const homepageCarsSlider = () =>
  `${base_url}/cars/homepageCarSlides.php`;
//admin
export const getAllCustomers = () => `${base_url}/admin/getAllCustomers.php`;
export const getAllCars = () => `${base_url}/admin/getAllCars.php`;
export const signupCar = () => `${base_url}/admin/signupCar.php`;
export const upateCar = () => `${base_url}/admin/updateCar.php`;
export const disableCustomer = () => `${base_url}/admin/disableCustomer.php`;
export const disableCar = () => `${base_url}/admin/dispaleCar.php`;
export const getDeals = (type) => `${base_url}/admin/allRents.php?type=${type}`;
export const handleRent = () => `${base_url}/admin/handleRent.php`;
export const getReports = () => `${base_url}/admin/getReports.php`;
export const updateReportStatus = () =>
  `${base_url}/admin/updateReportStatus.php`;
export const signupAdmin = () => `${base_url}/admin/signupAdmin.php`;

//gallery
export const getAllCarsGallery = () => `${base_url}/cars/getAllCarsGallery.php`;
