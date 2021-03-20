import React from "react";
import styled from "styled-components";
import updateReportStatusAction from "../actions/updateReportStatusAction";
import { useSelector, useDispatch } from "react-redux";
const Report = ({ report_id, name, message, email, archive }) => {
  const dispatch = useDispatch();
  const sendToArchive = (e) => {
    dispatch(updateReportStatusAction(report_id));
  };
  return (
    <Wrapper>
      <div className="header">
        <div className="data">
          <span>{name}</span>
          <h5>{email}</h5>
        </div>
        {!archive && (
          <div className="button">
            <button onClick={sendToArchive}>Archive</button>
          </div>
        )}
      </div>
      <div className="body">
        <p>{message}</p>
      </div>{" "}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 0px 7px rgb(0 0 0 /20%);
  margin: 1em 0;
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    .data {
      display: flex;
      flex-direction: column;
      padding: 0.3em 0;
      span {
        font-size: 1.1rem;
        padding: 0 0.5em;
        display: inline-block;
        font-weight: 600;
      }
      h5 {
        padding: 0.5em;
        display: inline-block;
        font-weight: lighter;
      }
    }

    border-bottom: 1px solid #ddd;
  }
  .body {
    width: auto;
    height: auto;
    p {
      max-width: 800px;
      font-size: 1.1rem;
      padding: 1em;
      line-height: 1;
    }
  }
  .button {
    button {
      width: auto;
      padding: 0.5em;
      margin: 0 1em;
      border: none;
      color: white;
      font-weight: bold;
      background: #1d62e0;
      font-size: 1.1rem;
      pointer-events: all;
      &::before {
        content: "\f187";
        font-family: "Font Awesome 5 Free";
        color: white;
        margin-right: 1em;
        pointer-events: none;
      }
    }
  }
`;

export default Report;
