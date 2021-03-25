import React, { useEffect } from "react";
// pages
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import CarDetails from "./pages/CarDetails";
import Account from "./pages/Account";
import CMS from "./pages/CMS";
import CMSLogin from "./pages/CMSLogin";
import CMS_Signup from "./pages/CMS_Signup";
//COMPONENTS
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
// ROUTING
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// action
import isUserLoggedInAction from "./actions/isUserLoggedInAction";
import isAdminLoggedInAction from "./actions/isAdminLoggedInAction";
import getDealsAction from "./actions/getDealsAction";
import getCustomerDealsAction from "./actions/getCustomerDealsAction";
import getReportsAction from "./actions/getReportsAction";

import firebase from "./firebase";
import { getReports } from "./api";
function App() {
  const { userStatus } = useSelector((state) => state.userStatus);
  const { adminStatus, routeHolder } = useSelector(
    (state) => state.isAdminLoggedIn
  );
  const dispatch = useDispatch();
  useEffect(() => {
    //whenever a re-redner happens this check for user login status
    dispatch(isUserLoggedInAction());
    dispatch(isAdminLoggedInAction());
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {})
      .catch((err) => {
        console.log(err);
      });
    messaging.onMessage((payload) => {
      if (payload.data.body === "REQ") {
        dispatch(getDealsAction());
      } else if (payload.data.body === "handlerent") {
        dispatch(getCustomerDealsAction());
      } else if (payload.data.body === "report") {
        dispatch(getReportsAction(0));
      }
    });
  }, []);
  const { pathname } = useLocation();

  let cmsPath = pathname.split("/")[1];
  return (
    <div className="App">
      <GlobalStyle />
      {cmsPath !== "cms" && <Navbar />}
      <Switch>
        <Route path={["/", "/login", "/signup"]} exact>
          <HomePage />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>{" "}
        <Route path="/account">
          <Account />
        </Route>
        <Route path={["/cardetails", "/cardetails/:id"]}>
          <CarDetails />
        </Route>{" "}
        <Route path={["/cms"]}>
          <CMS />
        </Route>
        <Route path={["/cms-login"]}>
          {routeHolder ? <Redirect to="/cms" /> : <CMSLogin />}
        </Route>
        <Route path={["/cms-signup"]}>
          <CMS_Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
