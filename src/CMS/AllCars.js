import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CarsOrders from "./CarsOrders";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
import * as nodata from "../lottie/nodata.json";
import { useSelector, useDispatch } from "react-redux";
import getAllCarsAction from "../actions/getAllCarsAction";

const AllCars = () => {
  const dispatch = useDispatch();

  const { isLoadingAllcars, allCars } = useSelector(
    (state) => state.getAllCustomers
  );
  useEffect(() => {
    dispatch(getAllCarsAction());
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const noDataOptions = {
    loop: true,
    autoplay: true,
    animationData: nodata.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledAllCustomers>
      {isLoadingAllcars && (
        <Lottie options={defaultOptions} height={200} width={200} />
      )}
      {allCars === false && (
        <Lottie options={noDataOptions} height={500} width={500} />
      )}
      {!isLoadingAllcars && allCars && (
        <Contnent>
          <TableWrapper>
            <Title>
              <h3>All Cars</h3>
            </Title>
            <Table>
              <thead>
                <th>ID</th>
                <th>make</th>
                <th>model</th>
                <th>status</th>
                <th>transition</th>
                <th>fuel </th>
                <th>warranty </th>
                <th>cost</th>
                <th>date </th>
                <th>Update </th>
                <th>Remove </th>
              </thead>
              <tbody>
                {allCars.map((car) => (
                  <CarsOrders
                    key={car.car_id}
                    number={car.car_id}
                    make={car.make}
                    model={car.model}
                    status={car.status}
                    transition={car.transition}
                    fuel={car.fuel}
                    warranty={car.warranty}
                    cost={car.cost}
                    date={car.date}
                    width={true}
                  />
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </Contnent>
      )}
    </StyledAllCustomers>
  );
};
const StyledAllCustomers = styled.div``;

const Contnent = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
  table {
    th {
      font-size: 0.8rem;
    }
    th,
    td {
      border-bottom: 1px solid #efefef;
      padding: 1rem;
      text-align: center;
    }
  }
`;
const TableWrapper = styled.div`
  overflow-x: auto;
`;
const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: #f01f2d;

  font-size: 1rem;
  font-weight: bolder;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: 0.5s all ease;
  z-index: 2;
  outline: 0;
`;
const StyledLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: #174bad;

  font-size: 1rem;
  font-weight: bolder;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: 0.5s all ease;
  z-index: 2;
  outline: 0;
  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding-top: 1em;
    &::before {
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f1b9";
      margin-right: 5px;
      font-size: 2rem;
      color: #174bad;
    }
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
const Table = styled.table`
  width: 100%;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  border-collapse: collapse;
  margin: 2em 0;
  border-radius: 5px;
  overflow: hidden;
  table,
  th {
    font-size: 0.8rem;
  }
  thead {
    text-align: start;
  }
  th,
  td {
    width: auto;
    text-align: start;
    padding: 1rem;

    border-bottom: 1px solid #efefef;
    text-align: center;
  }

  td {
    color: #545d68;
    text-align: start;
    font-size: 0.9rem;
    padding: 1rem;
  }
  th {
    font-weight: normal;
    padding: 1rem 0;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  tr:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const AcceptedTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: lightgreen;
  }
  th {
    background-color: #1c9906;
  }
  td {
    color: #1c9906;
  }
`;
export default AllCars;
