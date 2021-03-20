import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
// ACTIONS
import loggingInAction from "../../actions/loggingInAction";
import userDataAction from "../../actions/userDataAction";
//REDUX
import { useSelector } from "react-redux";
const RouteUser = () => {
  const { isUserLogged, error, wrongInput, disabled } = useSelector(
    (state) => state.userLogin
  );
  const [res, setRes] = useState();
  const history = useHistory();

  useEffect(() => {
    console.log(1, isUserLogged);
    if (isUserLogged) {
      history.push("/");
    }
    if (wrongInput) {
      setRes(<Wrong>Wrong ID or Password</Wrong>);
    }
    if (wrongInput) {
      setRes(<Wrong>Your Account is disabled , contact the admin</Wrong>);
    } else {
      setRes(null);
    }
  }, [isUserLogged, wrongInput]);
  return <div>{res}</div>;
};
const Wrong = styled.div`
  padding: 0.5em;
  margin: 0.5em 0;
  font-size: 1.1rem;
  color: red;
  background: rgb(0 0 0 /10%);
`;
export default RouteUser;
