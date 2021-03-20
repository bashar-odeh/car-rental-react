import React from "react";
import styled from "styled-components";
import { TableButton } from "./TableButton";
import { useDispatch, useSelector } from "react-redux";
import disableCustomerAction from "../actions/disableCustomerAction";
const Orders = ({ number, name, license, email, status, accept, width }) => {
  const dispatch = useDispatch();
  const { disableCar, isDisablingCar } = useSelector((state) => state.disable);
  const disableHandler = (e) => {
    dispatch(
      disableCustomerAction({
        customer_id: number,
        status: Math.abs(status - 1),
      })
    );
  };
  return (
    <AppliedStyle status={status}>
      <td>{number}</td>
      <td>{name}</td>
      <td>{license}</td>
      <td>{email}</td>
      <td>{status === "1" ? "Active" : "Disabled"}</td>

      <td>
        <TableButton color="#23BF08" subcolor="#1C9906" width="true">
          <button>
            <span>Deals</span>
            <div className="icon">
              <i className={"fas fa-check"}></i>
            </div>
          </button>
        </TableButton>
      </td>
      <td>
        <TableButton color="#DC3545" subcolor="#B02A37" width="true">
          <button onClick={disableHandler}>
            <span>{status === "1" ? "Disable" : "Enable"}</span>
            <div className="icon">
              <i className={"fas fa-times"}></i>
            </div>
          </button>
        </TableButton>
      </td>
    </AppliedStyle>
  );
};
const AppliedStyle = styled.tr`
  opacity: ${(props) => (props.status === "0" ? 0.8 : 1)};
`;

export default Orders;
