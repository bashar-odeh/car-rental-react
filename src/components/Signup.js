import React, { useEffect, useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link, useHistory, useLocation } from "react-router-dom";
//ACTION
import SignupAction from "../actions/signupCustomerAction";
// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
// lottie
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
// swal
import swal from "sweetalert";

const Signup = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, response } = useSelector((state) => state.signupCustomer);
  const [data, setData] = useState();
  let enterSignup = location.pathname.split("/")[1];
  // lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //

  const exitSignup = (e) => {
    e.preventDefault();
    EmptyFeild();
    history.push("/");
  };
  const signupHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    dispatch(SignupAction(data));
  };
  useEffect(() => {
    checkResponse();
  }, [response]);
  const checkResponse = () => {
    if (response === true) {
      swal("You Registerd ", "You Can Login now", "success");
      dispatch({ type: "END_SIGNING_CUS_UP" });
      EmptyFeild();
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } else if (response === "exists") {
      swal("Account Alredy Exists !", "", "info");
    }
  };

  const EmptyFeild = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <StyledSignup show={enterSignup === "signup" ? true : false}>
      <Wrapper>
        <Title>
          <h2>Sign up</h2>
        </Title>
        <form onSubmit={signupHandler} action="#">
          <div>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="Customer ID"
                name="customer_id"
                id="customer_id"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Customer ID</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="Full Name"
                name="full_name"
                id="full_name"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Full Name</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="License"
                name="license"
                id="license"
                required
                onChange={dataHandler}
              />
              <label className="form__label">License</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="phone"
                name="phone"
                id="phone"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Phone</label>
            </FormGroup>{" "}
          </div>{" "}
          <div>
            {" "}
            <FormGroup>
              <FormField
                type="email"
                className="form__field"
                placeholder="E-mail"
                name="email"
                id="email"
                onChange={dataHandler}
              />
              <label className="form__label">E-mail</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="password"
                className="form__field"
                placeholder="Password"
                name="password"
                id="password"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Password</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="password"
                className="form__field"
                placeholder="confirm Password"
                name="confirm_password"
                id="confirm_password"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Confirm Password</label>
            </FormGroup>{" "}
            <Buttons>
              {" "}
              <ButtonPrimary onClick={checkResponse}>
                <span> Sign up</span>
                {!isLoading && (
                  <Lottie options={defaultOptions} height={20} width={20} />
                )}
              </ButtonPrimary>
              <ButtonCanel type="button" onClick={exitSignup}>
                canel
              </ButtonCanel>
            </Buttons>{" "}
          </div>
        </form>
      </Wrapper>
    </StyledSignup>
  );
};
const StyledSignup = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  display: ${(props) => (props.show ? "flex" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 1s ease;
  backdrop-filter: blur(1rem);
  background: rgb(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
`;
const Title = styled(motion.div)`
  width: 100%;
  height: auto;
  h2 {
    font-size: 2rem;
  }
  text-align: center;
  padding: 1rem;
`;
const Wrapper = styled(motion.div)`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px black;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  background: white;
  border-radius: 1rem;
  form {
    border: 4px solid white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 0 4rem;

    h2 {
      font-size: 2rem;
      padding: 2rem 0;
    }
  }
`;
const FormField = styled(motion.input)`
  width: 190%;
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
      color: gold;
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
  justify-content: flex-end;
  flex-wrap: wrap;
`;
const ButtonPrimary = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 2rem 0;
  margin-right: 1rem;
  background: #174bad;
  font-size: 1.2rem;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.2s;
  span {
    margin-right: 1em;
  }
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: red;
`;
export default Signup;
