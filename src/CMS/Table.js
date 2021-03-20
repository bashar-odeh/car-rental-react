import React from "react";
import styled from "styled-components";
import Orders from "../Orders";

const Table = ({ title, headers }) => {
  return (
    <div>
      <Title>
        <h4>الطلبات اليومية</h4>
        <h6>القبول والرفض</h6>
      </Title>
      <StyledTable>
        <thead>
          <th>رقم الطلب</th>
          <th>اسم الزبون</th>
          <th>عنوان الزبون</th>
          <th>تاريخ الطلب</th>
          <th>وقت الطلب</th>
          <th>تفاصيل الطلب</th>
        </thead>
        <tbody>
          <Orders
            number={1}
            name="بشار عوده"
            address="طولكرم"
            date="27/1/2020"
            time="12:07 PM"
            width={true}
          />{" "}
          <Orders
            number={1}
            name="بشار عوده"
            address="طولكرم"
            date="27/1/2020"
            time="12:07 PM"
            width={true}
          />
        </tbody>
      </StyledTable>
    </div>
  );
};
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
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  border: 2px solid #ddd;
  th,
  td {
    width: auto;
    text-align: start;
    padding: 1em;
    text-align: center;
  }
  td {
    color: #545d68;
    text-align: start;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  tr:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
export default Table;
