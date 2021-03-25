import React, { useEffect, useRef } from "react";
import Managment from "../Managment";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import getDeals from "../../actions/getDealsAction";
import { useDispatch } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";
const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);
  const ref = useRef(null);

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
          <div style={{ width: "50%" }}>
            <Bar
              data={{
                labels: [
                  "Boston",
                  "Worcester",
                  "Springfield",
                  "Lowell",
                  "Cambridge",
                  "New Bedford",
                ],
                datasets: [
                  {
                    label: "Population",
                    data: [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                    ],
                    borderWidth: 1,
                    borderColor: "#777",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "this is ",
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
              width="100%"
              height={250}
            />
          </div>
          <div style={{ width: "50%" }}>
            <Pie
              data={{
                labels: [
                  "Boston",
                  "Worcester",
                  "Springfield",
                  "Lowell",
                  "Cambridge",
                  "New Bedford",
                ],
                datasets: [
                  {
                    label: "Population",
                    data: [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                    ],
                    borderWidth: 1,
                    borderColor: "#777",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "this is ",
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
              width="100%"
              height={250}
            />
          </div>
          <div style={{ width: "50%" }}>
            <Line
              data={{
                labels: [
                  "Boston",
                  "Worcester",
                  "Springfield",
                  "Lowell",
                  "Cambridge",
                  "New Bedford",
                ],
                datasets: [
                  {
                    label: "Population",
                    data: [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                    ],
                    borderWidth: 1,
                    borderColor: "#777",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "this is ",
                },
                legend: {
                  display: true,
                  position: "right",
                },
                tooltips: {
                  mode: "nearest",
                },
              }}
              width="100%"
              height={250}
            />
          </div>
        </Route>
        <Route path="/cms/admin/managment">
          <Managment />
        </Route>{" "}
      </Switch>
    </PageWrapper>
  );
};
export default Admin;
