import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Orders from "./Orders";
import * as nodata from "../lottie/nodata.json";

import { useSelector, useDispatch } from "react-redux";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";

const AllCustomers = () => {
  const { isLoadingAllCustomers, allCustomers } = useSelector(
    (state) => state.getAllCustomers
  );

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
      {allCustomers === false && (
        <Lottie options={noDataOptions} height={500} width={500} />
      )}
      {isLoadingAllCustomers && (
        <Lottie options={defaultOptions} height={100} width={100} />
      )}
      {!isLoadingAllCustomers && allCustomers && (
        <Contnent>
          <TableWrapper>
            <Title>
              <h3>All Customers</h3>
            </Title>
            <Table>
              <thead>
                <th>Customer ID</th>
                <th>Full Name</th>
                <th>License</th>
                <th>Email</th>
                <th>Status </th>

                <th>Update </th>
                <th>Remove </th>
              </thead>
              <tbody>
                {allCustomers.map((customer) => (
                  <Orders
                    key={customer.customer_id}
                    number={customer.customer_id}
                    name={customer.full_name}
                    license={customer.license}
                    email={customer.phone}
                    email={customer.email}
                    status={customer.status}
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
const StyledAllCustomers = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    width: 100%;
    background: rgb(0, 0, 0, 0.01);
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const Contnent = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
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
      content: "\f007";
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

  th,
  td {
    width: auto;
    padding: 1em 0;

    border-bottom: 1px solid #efefef;
    text-align: center;
  }

  td {
    color: #545d68;
    text-align: center;
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
export default AllCustomers;
