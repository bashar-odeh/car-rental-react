import React, { useState, useEffect } from "react";
import styled from "styled-components";
//action
import signupCustomer from "../actions/signupCustomerAction";
// react-redux
import { useSelector, useDispatch } from "react-redux";
//swal
import swal from "sweetalert";
const ManageCustomers = () => {
  const dispatch = useDispatch();
  const { isLoading, response } = useSelector((state) => state.signupCustomer);
  const [data, setData] = useState();
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signupHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    console.log("x");
    dispatch(signupCustomer(data));
  };
  const checkResponse = () => {
    if (response === true) {
      swal("You Registerd ", "You Can Login now", "success");
      dispatch({ type: "END_SIGNING_CUS_UP" });
      EmptyFeild();
    } else if (response === "exists") {
      swal("Account Alredy Exists !", "", "info");
    } else if (response === false) {
      swal("somethin went wrong !", "", "warning");
    }
  };
  useEffect(() => {
    checkResponse();
  }, [response]);
  const EmptyFeild = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  return (
    <Wrapper>
      <h2>All Customers</h2>
      <Adding>
        <h3>Add / update Customer</h3>
        <form onSubmit={signupHandler}>
          <InputWrapper>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="ID"
                name="customer_id"
                id="customer_id"
                required
                onChange={dataHandler}
              />
              <label className="form__label">ID</label>
            </FormGroup>
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
            </FormGroup>
          </InputWrapper>{" "}
          <InputWrapper>
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
            </FormGroup>
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
            </FormGroup>
          </InputWrapper>{" "}
          <InputWrapper>
            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="Phone"
                name="phone"
                id="phone"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Phone</label>
            </FormGroup>
            <FormGroup>
              <FormField
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                required
                onChange={dataHandler}
              />
              <label className="form__label">Email</label>
            </FormGroup>
          </InputWrapper>
          <Buttons>
            <ButtonPrimary onClick={checkResponse}>Save</ButtonPrimary>
          </Buttons>
        </form>
      </Adding>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h2 {
    width: 100%;
    background: rgb(0, 0, 0, 0.01);
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;
const Adding = styled.div`
  h3 {
    font-size: 0.9rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormField = styled.input`
  width: 90%;
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
const ButtonPrimary = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background: #174bad;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
const Buttons = styled.div``;
export default ManageCustomers;
