import React from "react";
import RequestOrder from "./RequestOrder";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { deals, declainedDeals, acceptedDeals, isLoadingDeals } = useSelector(
    (state) => state.getDeals
  );
  return (
    <Wrapper>
      <Title>
        <h4>Daily Reuests</h4>
        <h6>Accept and decline</h6>
      </Title>

      <Contnent>
        <TableWrapper>
          {" "}
          <Table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Car ID</th>
                <th> Start Date</th>
                <th>End Date</th>
                <th>pickup location</th>
                <th>dropoff location </th>
                <th>cost</th>
              </tr>
            </thead>
            {!isLoadingDeals && deals && (
              <tbody>
                {deals.map((deal) => (
                  <RequestOrder
                    deal_id={deal.deal_id}
                    number={deal.customer_id}
                    car_style_id={deal.car_style_id}
                    start_date={deal.start_date}
                    end_date={deal.end_date}
                    cost={deal.cost}
                    pickup_location={deal.pickup_location}
                    dropoff_location={deal.dropoff_location}
                    accept={false}
                  />
                ))}
              </tbody>
            )}
          </Table>
        </TableWrapper>
      </Contnent>

      <Title>
        <h4>Accepted Orders</h4>
      </Title>
      <Contnent>
        <TableWrapper>
          <AcceptedTable>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Car ID</th>
                <th> Start Date</th>
                <th>End Date</th>
                <th>pickup location</th>
                <th>dropoff location </th>
                <th>cost</th>
              </tr>
            </thead>
            {!isLoadingDeals && acceptedDeals && (
              <tbody>
                {acceptedDeals.map((deal) => (
                  <RequestOrder
                    deal_id={deal.deal_id}
                    number={deal.customer_id}
                    car_style_id={deal.car_style_id}
                    start_date={deal.start_date}
                    end_date={deal.end_date}
                    cost={deal.cost}
                    pickup_location={deal.pickup_location}
                    dropoff_location={deal.dropoff_location}
                    accept={true}
                  />
                ))}
              </tbody>
            )}
          </AcceptedTable>
        </TableWrapper>
      </Contnent>

      <Title>
        <h4>Declined Orders</h4>
      </Title>
      <Contnent>
        <TableWrapper>
          <DeclineTable>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Car ID</th>
                <th> Start Date</th>
                <th>End Date</th>
                <th>pickup location</th>
                <th>dropoff location </th>
                <th>cost</th>
              </tr>
            </thead>
            <tbody>
              {!isLoadingDeals &&
                declainedDeals &&
                declainedDeals.map((deal) => (
                  <RequestOrder
                    deal_id={deal.deal_id}
                    number={deal.customer_id}
                    car_style_id={deal.car_style_id}
                    start_date={deal.start_date}
                    end_date={deal.end_date}
                    cost={deal.cost}
                    pickup_location={deal.pickup_location}
                    dropoff_location={deal.dropoff_location}
                    accept={true}
                  />
                ))}
            </tbody>
          </DeclineTable>
        </TableWrapper>
      </Contnent>
    </Wrapper>
  );
};
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
