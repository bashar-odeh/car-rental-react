import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import signupAdminAction from "../actions/signupAdminAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CMS_Signup = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.signupAdmin);
  const ref = useRef(null);
  const [warining, setWarning] = useState(false);

  const [data, setData] = useState({
    password: "",
    confirm_password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    dispatch(signupAdminAction(data));
    // clear inputs insted of using refs
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //

  //check if password matches
  useEffect(() => {
    if (data.password !== data.confirm_password) {
      setWarning(true);
      ref.current.classList.add("de-active-btn");
    } else {
      setWarning(false);
      ref.current.classList.remove("de-active-btn");
    }
    return () => {
      setWarning(false);
    };
  }, [data.password, data.confirm_password]);

  return (
    <StyledLogin>
      <Form onSubmit={submitHandler}>
        <Logo>
          <img src={logo} alt="" />
        </Logo>{" "}
        <h3>Sign up form</h3>
        <FormGroup>
          <label htmlFor="id">Admin ID</label>
          <input
            type="text"
            name="admin_id"
            placeholder="Your ID"
            onChange={dataHandler}
            required
          />
        </FormGroup>{" "}
        <FormGroup>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={dataHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Repeate Your Password"
            name="confirm_password"
            onChange={dataHandler}
            required
          />
          {warining && <Warning>Password doesn't match</Warning>}
        </FormGroup>{" "}
        <FormGroup>
          <label>
            If you dont Have account , <Link to="/cms/login">Login</Link>
          </label>
        </FormGroup>
        <ButtonPrimary ref={ref}>Sign up</ButtonPrimary>
      </Form>
    </StyledLogin>
  );
};

const StyledLogin = styled(motion.div)`
  background-color: #e9e9e9;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .de-active-btn {
    background-color: gray;
    pointer-events: none;
  }
  .warning {
    &:focus {
      outline-color: red;
    }
  }
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
  h3 {
    width: 100%;
    margin: 1em auto;
    font-family: sans-serif;
    text-align: center;
  }
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
const Warning = styled.div`
  color: red;
  font-size: 0.8em;
  transition: 1s ease all;
  font-weight: 900;
  text-transform: capitalize;
`;
export default CMS_Signup;
