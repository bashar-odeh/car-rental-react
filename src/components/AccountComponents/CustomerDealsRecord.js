import React from "react";
import styled from "styled-components";

const CustomerDealsRecord = ({
  customer_id,
  car_id,
  start_date,
  end_date,
  pickup_location,
  dropoff_location,
  color,
  path,
  cost,
  status,
}) => {
  const base_url = "http://localhost/car-rental/admin/";

  return (
    <AppliedStyle status={status}>
      <td>
        <img src={`${base_url}${path}`} alt="" />
      </td>
      <td>{customer_id}</td>
      <td>{car_id}</td>
      <td>{start_date}</td>
      <td>{end_date}</td>
      <td>{pickup_location}</td>
      <td>{dropoff_location}</td>
      <td>{cost}</td>

      <td>{status === "not" ? "Processing" : status}</td>
    </AppliedStyle>
  );
};
const AppliedStyle = styled.tr`
  img {
    height: 50px;
  }
  td {
    background-color: ${(props) =>
      props.status === "declined" ? "#dc3545" : ""};
    opacity: ${(props) => (props.status === "declined" ? 0.75 : 1)};
    color: black;
  }
`;

export default CustomerDealsRecord;
