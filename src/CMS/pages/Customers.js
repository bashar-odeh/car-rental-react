import React, { useState, useEffect } from "react";
import ManageCustomers from "../ManageCustomers";
import AllCustomers from "../AllCustomers";
import { Switch, Route } from "react-router-dom";
import PageWrapper from "../PageWrapper";
// action
import getAllCustomersAction from "../../actions/getAllCustomersAction";
//react redux
import { useDispatch } from "react-redux";
const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomersAction());
  }, [dispatch]);
  return (
    <PageWrapper>
      <Switch>
        <Route path="/cms/customers" exact>
          Customer Services
          <p>Here you can as admin manage all yuor customers data </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est modi
            iste atque eum eaque eligendi corporis eius! Minima, ab. Quos
            similique ipsum qui minima incidunt temporibus autem molestiae
            laudantium delectus!
          </p>
        </Route>
        <Route path="/cms/customers/managecustomers">
          <ManageCustomers />
        </Route>{" "}
        <Route path="/cms/customers/allcustomers">
          <AllCustomers />
        </Route>
      </Switch>
    </PageWrapper>
  );
};

export default Customers;
