import React from "react";
import styled from "styled-components";
import { TableButton } from "./TableButton";
import { useDispatch, useSelector } from "react-redux";
import handleDealAction from "../actions/handleDealAction";
const RequestOrder = ({
  deal_id,
  number,
  car_style_id,
  start_date,
  end_date,
  pickup_location,
  dropoff_location,
  cost,
  accept,
}) => {
  const dispatch = useDispatch();
  const dealHandler = (e, type) => {
    dispatch(handleDealAction(deal_id, type));
  };
  return (
    <AppliedStyle>
      <td>{number}</td>
      <td>{car_style_id}</td>
      <td>{start_date}</td>
      <td>{end_date}</td>
      <td>{pickup_location}</td>
      <td>{dropoff_location}</td>
      <td>{cost}</td>

      {!accept && (
        <>
          <td>
            <TableButton color="#23BF08" subcolor="#1C9906" width="true">
              <button onClick={(e) => dealHandler(e, "accept")}>
                <span>Accept</span>
                <div className="icon">
                  <i className={"fas fa-check"}></i>
                </div>
              </button>
            </TableButton>
          </td>
          <td>
            <TableButton color="#DC3545" subcolor="#B02A37" width="true">
              <button onClick={(e) => dealHandler(e, "declined")}>
                <span>Decline</span>
                <div className="icon">
                  <i className={"fas fa-times"}></i>
                </div>
              </button>
            </TableButton>
          </td>
        </>
      )}
    </AppliedStyle>
  );
};
const AppliedStyle = styled.tr``;

export default RequestOrder;
