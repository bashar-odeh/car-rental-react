import React from "react";
import styled from "styled-components";
import { TableButton } from "./TableButton";
import { Link } from "react-router-dom";
import disableCarAction from "../actions/disableCarAction";
import { useDispatch, useSelector } from "react-redux";
const CarsOrders = ({
  number,
  make,
  model,
  transition,
  status,
  fuel,
  warranty,
  cost,
  width,
  date,
}) => {
  const dispatch = useDispatch();
  const { disableCustomer, isDisablingCustomer } = useSelector(
    (state) => state.disable
  );
  const disableHandler = (e) => {
    dispatch(
      disableCarAction({ car_id: number, status: Math.abs(status - 1) })
    );
  };
  return (
    <AppliedStyle status={status}>
      <td>{number}</td>
      <td>{make}</td>
      <td>{model}</td>
      <td>{status === "1" ? "active" : "disabled"}</td>
      <td>{transition}</td>
      <td>{fuel}</td>
      <td>{warranty}</td>
      <td>{cost}$</td>
      <td>{date}</td>

      <td>
        <StyledLink to={`/cms/cars/updatecar/${number}`}>
          <TableButton color="#23BF08" subcolor="#1C9906" width="true">
            <button>
              <span>Update</span>
              <div className="icon">
                <i className={"fas fa-check"}></i>
              </div>
            </button>
          </TableButton>
        </StyledLink>
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default CarsOrders;
