import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import Line from "../Line";
import CustomerDealsRecord from "./CustomerDealsRecord";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { allDeals, isLoadingDeals } = useSelector(
    (state) => state.getCustomerDeals
  );
  return (
    <StyledMotion>
      <Title>
        <h2>Main Page</h2>
      </Title>

      <Contnents>
        <p>
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </p>

        <Wrapper>
          <Title>
            <h4>Your Orders</h4>
            <h6>Here you can check your orders</h6>
          </Title>

          <Contnent>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>car</th>
                    <th>Customer ID</th>
                    <th>Car ID</th>
                    <th> Start Date</th>
                    <th>End Date</th>
                    <th>pickup location</th>
                    <th>dropoff location </th>
                    <th>cost</th>

                    <th>status</th>
                  </tr>
                </thead>
                {!isLoadingDeals && allDeals && (
                  <tbody>
                    {allDeals.map((deal) => (
                      <CustomerDealsRecord
                        customer_id={deal.customer_id}
                        car_id={deal.car_id}
                        start_date={deal.start_date}
                        end_date={deal.end_date}
                        pickup_location={deal.pickup_location}
                        dropoff_location={deal.dropoff_location}
                        path={deal.path}
                        cost={deal.cost}
                        status={deal.status}
                      />
                    ))}
                  </tbody>
                )}
              </Table>
            </TableWrapper>
          </Contnent>
        </Wrapper>
      </Contnents>
    </StyledMotion>
  );
};
const StyledMotion = styled(motion.div)`
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
  padding: 1rem;
`;

const Contnents = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  p {
    font-size: 1.2rem;
    color: #333;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h4 {
    font-size: 1rem;
    padding-top: 1em;
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
const Contnent = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
`;
const TableWrapper = styled.div`
  overflow-x: auto;
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
    border-bottom: 1px solid #efefef;
    padding: 1rem;
    text-align: center;
  }
  td {
    color: #545d68;

    font-size: 0.9rem;
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
const DeclineTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: #fae3e5;
  }
  th {
    background-color: #dc3545;
  }
  td {
    color: #dc3545;
  }
`;
export default Dashboard;
