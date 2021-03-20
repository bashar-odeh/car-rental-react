import React, { useState, useEffect } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link, useHistory, useLocation } from "react-router-dom";
// ACTIONS
import loggingInAction from "../actions/loggingInAction";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import RouteUser from "./Routing/RouteUser";
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  let enterLogin = location.pathname.split("/")[1];

  const dispatch = useDispatch();
  // state
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loggingInAction(data));
    // clear inputs insted of using refs
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const exitHandler = (e) => {
    dispatch({ type: "CHECKING_LOGIN_DATA" });
    history.push("/");
  };
  return (
    <StyledLogin show={enterLogin === "login" ? true : false}>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <FormGroup>
          <FormField
            type="input"
            className="form__field"
            placeholder="Name"
            name="username"
            id="name"
            onChange={dataHandler}
          />
          <label className="form__label">Name</label>
        </FormGroup>{" "}
        <FormGroup>
          <FormField
            type="password"
            className="form__field"
            placeholder="Password"
            name="password"
            id="password"
            onChange={dataHandler}
          />
          <label className="form__label">Password</label>
        </FormGroup>{" "}
        <RouteUser />
        <Buttons>
          {" "}
          <ButtonPrimary type="submit">Login</ButtonPrimary>
          <ButtonCanel type="button" onClick={exitHandler}>
            canel
          </ButtonCanel>
        </Buttons>
      </form>
    </StyledLogin>
  );
};
const StyledLogin = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: ${(props) => (props.show ? "1" : "0")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  transition: all 0.3s ease;

  position: absolute;
  top: 50%;
  left: 50%;
  backdrop-filter: blur(1rem);
  transform: translate(-50%, -50%);
  background: rgb(0, 0, 0, 0.6);
  form {
    border: 4px solid white;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 4rem;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.5s ease;
    transform: ${(props) =>
      props.show
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};

    box-shadow: 0 0 10px black;
    background: white;
    border-radius: 1rem;
    h2 {
      font-size: 2rem;
      padding: 2rem 0;
    }
  }
`;
const FormField = styled(motion.input)`
  width: 180%;
  height: 100%;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
const FormGroup = styled(motion.div)`
  width: 100%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }
`;
const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ButtonPrimary = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 2rem 0;
  margin-right: 1rem;
  background: rgb(17, 106, 196);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: #ddd;
  color: black;
`;
export default Login;
