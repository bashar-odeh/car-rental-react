import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import carDataAction from "../actions/carDataAction";
import updateCarAction from "../actions/updateCarAction";
import axios from "axios";
import formData from "react-form-data";
import { motion } from "framer-motion";
const UpdateCar = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { carData, isLoadingCarData } = useSelector((state) => state.carData);
  const { updated } = useSelector((state) => state.updateCar);
  let datas = carData.car_details;
  let history = useHistory();
  useEffect(() => {
    if (!isLoadingCarData) {
      setData({
        car_id: datas.car_id,
        make: datas.make,
        cost: datas.cost,
        description: datas.description,
        fuel: datas.fuel,
        made_year: datas.made_year,
        model: datas.model,
        status: datas.status === "1" ? "active" : "inactive",
        warranty: datas.warranty,
        transition: datas.transition,
      });
    }
  }, [isLoadingCarData]);
  useEffect(() => {
    if (updated === true) {
      swal("Car Updated", "", "success");
      setTimeout(() => {
        history.push("/cms/cars/allcars");
      }, 1500);
    } else if (updated === false) {
      swal("Car Updated", "", "warning");
    }
    dispatch({ type: "UPDATEING_CAR" });
  }, [updated]);
  const onUpdate = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    dispatch(updateCarAction(data));
  };
  const EmptyFeild = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(carDataAction(pathname.split("/")[4]));
  }, []);
  return (
    <Adding>
      <Title>
        <h3 className="user-title title">Update Car</h3>
      </Title>
      {!isLoadingCarData && (
        <form onSubmit={onUpdate}>
          <InputWrapper>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="car_id"
                name="car_id"
                id="car_id"
                required
                value={data.car_id}
                onChange={dataHandler}
              />
              <label className="form__label">ID</label>
            </FormGroup>
            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="make"
                name="make"
                id="make"
                required
                value={data.make}
                onChange={dataHandler}
              />
              <label className="form__label">make</label>
            </FormGroup>
          </InputWrapper>
          <InputWrapper>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="model"
                name="model"
                id="model"
                required
                value={data.model}
                onChange={dataHandler}
              />
              <label className="form__label">model</label>
            </FormGroup>
            <FormGroup>
              <FormField
                type="number"
                className="form__field"
                placeholder="cost"
                name="cost"
                id="cost"
                required
                value={data.cost}
                onChange={dataHandler}
              />
              <label className="form__label">cost</label>
            </FormGroup>{" "}
          </InputWrapper>{" "}
          <InputWrapper>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="fuel"
                name="fuel"
                id="fuel"
                list="type"
                required
                value={data.fuel}
                onChange={dataHandler}
              />
              <datalist id="type">
                <option value="Electric"></option>
                <option value="Hybrid"></option>
                <option value="Gas"></option>
                <option value="Petrol"></option>
              </datalist>
              <label className="form__label">fuel</label>
            </FormGroup>

            <FormGroup>
              <FormField
                type="text"
                className="form__field"
                placeholder="transition"
                name="transition"
                id="transition"
                list="trans"
                required
                value={data.transition}
                onChange={dataHandler}
              />
              <datalist id="trans">
                <option value="Manual"></option>
                <option value="Automatic"></option>
              </datalist>
              <label className="form__label">transition</label>
            </FormGroup>
          </InputWrapper>
          <InputWrapper>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="warranty"
                name="warranty"
                id="warranty"
                list="war"
                required
                onChange={dataHandler}
                value={data.warranty}
              />
              <datalist id="war">
                <option value="Yes"></option>
                <option value="No"></option>
              </datalist>
              <label className="form__label">warranty</label>
            </FormGroup>{" "}
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="Made Year"
                name="made_year"
                id="made_year"
                required
                onChange={dataHandler}
                value={data.made_year}
              />{" "}
              <label className="form__label">Made Year</label>
            </FormGroup>
          </InputWrapper>
          <InputWrapper>
            <FormGroup>
              <FormField
                type="date"
                className="form__field"
                placeholder="make"
                name="date"
                id="date"
                required
                value={datas.date}
              />
              <label className="form__label">Date</label>
            </FormGroup>
            <FormGroup>
              <FormField
                type="input"
                className="form__field"
                placeholder="make"
                name="status"
                id="date"
                required
                onChange={dataHandler}
                value={data.status}
                list="status"
              />
              <datalist id="status">
                <option value="active"></option>
                <option value="disabled"></option>
              </datalist>
              <label className="form__label">Status - active or disabled</label>
            </FormGroup>
          </InputWrapper>
          <InputWrapper>
            <FormGroup>
              <textarea
                cols="80"
                rows="10"
                name="description"
                id="description"
                placeholder="Descripe the Car"
                style={{ padding: "1em", fontSize: "1.2rem" }}
                required
                onChange={dataHandler}
                value={data.description}
              ></textarea>
            </FormGroup>{" "}
          </InputWrapper>
          <Buttons>
            <ButtonPrimary>Save</ButtonPrimary>
          </Buttons>
        </form>
      )}
    </Adding>
  );
};

const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  .title {
    &::before {
      display: flex;
      align-items: center;
      margin-right: 5px;
      font-size: 2rem;
      color: #174bad;
      font-family: "Font Awesome 5 Free";
    }
  }
  .user-title {
    &::before {
      font-weight: 900;
      content: "\f044";
    }
  }
  .add-title {
    &::before {
      font-weight: 900;
      content: "\f302";
    }
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

export default UpdateCar;
