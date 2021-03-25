import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import adminLogin from "../actions/adminLogin";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RouteAdmin from "../components/Routing/RouteAdmin";
const CMSLogin = () => {
  const { adminStatus } = useSelector((state) => state.isAdminLoggedIn);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    dispatch(adminLogin(data));
    // clear inputs insted of using refs
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <StyledLogin>
      <Form onSubmit={submitHandler}>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <FormGroup>
          <label htmlFor="email">Admin ID</label>
          <input
            type="text"
            name="admin_id"
            placeholder="ID"
            onChange={dataHandler}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={dataHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>
            If you dont Have account , <Link to="/cms/signup">Signup</Link>
          </label>
        </FormGroup>
        <ButtonPrimary>Login</ButtonPrimary>
      </Form>
      <RouteAdmin />
    </StyledLogin>
  );
};

const StyledLogin = styled(motion.div)`
  background-color: #e9e9e9;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  img {
    width: 50%;
  }
`;

const Form = styled.form`
  max-height: auto;
  width: auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  color: #676a6c;
`;

const FormGroup = styled(motion.div)`
  width: 100%;
  position: relative;

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  input {
    flex: 1 1 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 1em 0;
  }
  label {
    font-size: 0.9em;
  }
`;

const ButtonPrimary = styled.button`
  border: none;
  width: 100%;
  padding: 0.7em 0;
  margin-bottom: 1em;
  margin-top: 1em;
  background: #458bc4;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
export default CMSLogin;
