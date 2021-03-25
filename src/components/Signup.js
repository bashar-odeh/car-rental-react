import React, { useEffect, useState, useRef } from "react";
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
  const { isLoading, response } = useSelector((state) => state.signup);
  const [data, setData] = useState({
    password: "",
    confirm_password: "",
  });
  let enterSignup = location.pathname.split("/")[1];
  const ref = useRef(null);
  const refCon = useRef(null);
  const [warining, setWarning] = useState(false);

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
    if (data.password !== data.confirm_password) {
      setWarning(true);
      ref.current.classList.add("de-active-btn");
      refCon.current.classList.add("warning");
    } else {
      setWarning(false);
      ref.current.classList.remove("de-active-btn");
      refCon.current.classList.remove("warning");
    }
    return () => {
      setWarning(false);
    };
  }, [data.password, data.confirm_password]);
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
      <Wrapper show={enterSignup === "signup" ? true : false}>
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
                ref={refCon}
                onChange={dataHandler}
              />
              <label className="form__label">Confirm Password</label>
              {warining && <Warning>Password doesn't match</Warning>}
            </FormGroup>
            <Buttons>
              <ButtonPrimary ref={ref} onClick={checkResponse}>
                <span> Sign up</span>
                {!isLoading && (
                  <Lottie options={defaultOptions} height={20} width={20} />
                )}
              </ButtonPrimary>
              <ButtonCanel type="button" onClick={exitSignup}>
                canel
              </ButtonCanel>
            </Buttons>
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

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transition: all 1s ease;
  backdrop-filter: blur(1rem);
  background: rgb(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);

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
  height: 80%;
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
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.show
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)"};
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
const FormField = styled.input`
  width: 180%;
  height: 100%;
  margin-right: 0.5rem;
  border: 0;
  border-bottom: 1px solid black;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
const FormGroup = styled.div`
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
    font-size: 0.8rem;
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
const Warning = styled.div`
  color: red;
  font-size: 1.1em;
  padding: 1rem 0;
  transition: 1s ease all;
  font-weight: 900;
  text-transform: capitalize;
`;
export default Signup;
