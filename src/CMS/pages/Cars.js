import React, { useEffect } from "react";
import AddCar from "../AddCar";
import AllCars from "../AllCars";
import UpdateCar from "../UpdateCar";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import getAllCarsAction from "../../actions/getAllCarsAction";

import { useDispatch } from "react-redux";
const Cars = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllCarsAction());
  }, []);
  return (
    <PageWrapper>
      <Switch>
        <Route path="/cms/cars" exact>
          Cars Services
          <p>Here you can as admin manage all yuor Carss data </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est modi
            iste atque eum eaque eligendi corporis eius! Minima, ab. Quos
            similique ipsum qui minima incidunt temporibus autem molestiae
            laudantium delectus!
          </p>
        </Route>
        <Route path="/cms/cars/allcars">
          <AllCars />
        </Route>{" "}
        <Route path="/cms/cars/addcar">
          <AddCar />
        </Route>{" "}
        <Route path="/cms/cars/updatecar">
          <UpdateCar />
        </Route>
      </Switch>
    </PageWrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;

export default Cars;
