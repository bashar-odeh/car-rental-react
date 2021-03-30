import React, { useState, useEffect } from "react";
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
import {
  Route,
  Switch,
  useLocation,
  Redirect,
  useParams,
} from "react-router-dom";
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
  const { adminStatus } = useSelector((state) => state.isAdminLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    //whenever a re-redner happens this check for user login status
    (async function () {
      await dispatch(isAdminLoggedInAction());
    })();
  }, [adminStatus]);
  useEffect(() => {
    (async function () {
      await dispatch(isUserLoggedInAction());
    })();
  }, [userStatus]);
  const { pathname } = useLocation();

  let cmsPath = pathname.split("/")[1];
  const pageHandler = () => {
    if (adminStatus === true) {
      return <CMS />;
    } else if (adminStatus === false) {
      return <CMSLogin />;
    }
  };
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
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path={["/cardetails", "/cardetails/:id"]}>
          <CarDetails />
        </Route>
        <Route path={["/cms"]}>{pageHandler()}</Route>

        <Route path={["/cms-signup"]}>
          <CMS_Signup />
        </Route>
        <Route>
          <span>405</span>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
