import React, { useState, useEffect, useRef } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import updateWishlistItem from "../../actions/updateWishlistItem";
import rentCarAction from "../../actions/rentCarAction";
import carDataAction from "../../actions/carDataAction";
const RentSpecs = ({ carData, isLoadingCarData }) => {
  const { userStatus } = useSelector((state) => state.userStatus);
  const { rentResponse } = useSelector((state) => state.rentCar);
  const { wishlist, car_details, styles } = carData;
  const dispatch = useDispatch();
  const updateWishList = (type, car_id) => {
    dispatch(updateWishlistItem(type, car_id));
  };
  const ref = useRef();
  const [data, setData] = useState({
    cost: car_details.cost,
    pick_up: null,
    drop_off: null,
    car_style_id: "",
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    (async function () {
      ref.current.innerText = "sending";
      ref.current.classList.add("sending");
      await dispatch(rentCarAction(data));
    })();
  };
  useEffect(() => {
    if (rentResponse === true) {
      setData({
        ...data,
        cost: car_details.cost,
        pick_up: "",
        drop_off: "",
        car_style_id: "",
      });
      dispatch({ type: "LOADING_RENTING_REQUEST" });
      ref.current.innerText = "Book this car";
      ref.current.classList.remove("sending");
      dispatch(carDataAction(car_details.car_id));
    }
  }, [rentResponse]);
  return (
    <StyledFilter>
      <Price>
        <h3>$340 / per day </h3>
        {userStatus && wishlist.length !== 0 && (
          <i
            onClick={() => updateWishList("remove", car_details.car_id)}
            className="fas fa-heart"
          ></i>
        )}{" "}
        {userStatus && wishlist.length === 0 && (
          <i
            onClick={() => updateWishList("add", car_details.car_id)}
            className="far fa-heart"
          ></i>
        )}
      </Price>

      <Form onSubmit={submitHandler}>
        <Wrapper>
          <InputGroup>
            <label htmlFor="pick-up">Pick Up Location</label>
            <select
              name="pick_up"
              id="pick_up"
              onChange={dataHandler}
              value={data.pick_up}
              required
            >
              <option value="">Select pick up</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="drop">drop off Location</label>

            <select
              id="drop_off"
              name="drop_off"
              onChange={dataHandler}
              value={data.drop_off}
              required
            >
              <option value="">Select drop off</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
              <option value="tulkarm">Tulkarm</option>
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="color">Color</label>

            <select
              id="color"
              name="car_style_id"
              onChange={dataHandler}
              value={data.car_style_id}
              required
            >
              <option value={null}>Select Color</option>
              {styles.map((color) => (
                <option value={color.car_style_id}>{color.color}</option>
              ))}
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="pick-up-date">PICK-UP DATE</label>
            <input
              type="date"
              name="start_date"
              onChange={dataHandler}
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="drop-off-date">DROP-OFF DATE</label>
            <input
              type="date"
              name="end_date"
              onChange={dataHandler}
              required
            />
          </InputGroup>
        </Wrapper>
        {userStatus && (
          <Buttons>
            <button ref={ref} type="submit">
              Book this car
            </button>
          </Buttons>
        )}
        {!userStatus && (
          <StyledLink to="/login">Login to Book this car</StyledLink>
        )}
      </Form>
    </StyledFilter>
  );
};
const StyledFilter = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  .sending {
    background: gray;
    pointer-events: none;
  }
`;
const Price = styled(motion.div)`
  height: 8vh;
  background: #1d62e0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  i {
    z-index: 10;
    position: absolute;
    right: 0;
    font-size: 2rem;
    color: red;
    pointer-events: all;
    cursor: pointer;
    left: 7px;
    bottom: 12px;
    &::after {
      font-family: sans-serif;
      font-weight: normal;
      content: "Wishlist";
      background: black;
      color: white;
      font-size: 0.5em;
      color: white;
      border-radius: 10px;
      position: absolute;
      padding: 0.5em;
      left: -5%;
      bottom: 100%;
      transform: scale(0);
      transition: 0.3s all ease;
      transform-origin: bottom;
    }
    &:hover::after {
      transform: scale(1);
    }
  }
`;
const Form = styled(motion.form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  div {
    padding-top: 0.5rem;
  }
`;
const InputGroup = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;

  label {
    font-size: 0.8rem;
    color: black;
    font-weight: bold;
    width: 100%;
    padding: 1em 0;
  }
  select,
  input {
    font-size: 0.7rem;

    width: 110%;
    padding: 1em;
    color: gray;
    &:focus {
      outline-color: rgb(16, 106, 196);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Buttons = styled(motion.div)`
  width: 110%;
  margin: 0 auto;
  span,
  button {
    width: 100%;
    padding: 1em;
    border: none;
    color: white;
    font-weight: bold;
    background: #1d62e0;
    font-size: 1rem;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  padding: 1em;
  border: none;
  color: white;
  font-weight: bold;
  background: #1d62e0;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
`;
export default RentSpecs;
