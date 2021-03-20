import React, { useEffect } from "react";
import Managment from "../Managment";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import getDeals from "../../actions/getDealsAction";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);
  return (
    <PageWrapper>
      <Switch>
        <Route path="/cms/admin" exact>
          Customer Services
          <p>Here you can as admin manage all yuor customers data </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est modi
            iste atque eum eaque eligendi corporis eius! Minima, ab. Quos
            similique ipsum qui minima incidunt temporibus autem molestiae
            laudantium delectus!
          </p>
        </Route>
        <Route path="/cms/admin/managment">
          <Managment />
        </Route>{" "}
      </Switch>
    </PageWrapper>
  );
};

export default Admin;
