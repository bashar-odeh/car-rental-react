import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gearbox from "../images/gearbox.png";
import highway from "../images/highway.png";
import hybrid from "../images/hybrid.png";
import checkmark from "../images/checkmark.png";
const FleetCard = ({
  car_id,
  path,
  name,
  fuel,
  make,
  model,
  transition,
  warranty,
  cost,
}) => {
  const base_url = "http://localhost/car-rental/admin/";

  return (
    <StyledFleetCard>
      <Image>
        <img src={`${base_url}/${path}`} alt="" />
      </Image>
      <Wrapper>
        <Title>
          <h3>
            {make} | {model}
          </h3>
        </Title>
        <Specs>
          <span>
            <img src={highway} alt="" />
            4980
          </span>
          <span>
            <img src={hybrid} alt="" />
            {fuel}
          </span>

          <span>
            <img src={gearbox} alt="" />
            {transition}
          </span>
        </Specs>
        <Advantages>
          <ul>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Bluetooth
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Chilled AC
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Unlimited Mileage
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Heated seats
            </li>
            <li>
              <img src={checkmark} alt="" />
              Pay at Pick-Up
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Automatic
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Audio input
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Budget Car
            </li>
            <li>
              {" "}
              <img src={checkmark} alt="" />
              Free cancellation
            </li>
          </ul>
        </Advantages>
        <Price>
          <span>{cost}$ / per day</span>{" "}
          <Link to={`/cardetails/${car_id}`}>
            <Buttons>
              <button>Rent</button>
            </Buttons>
          </Link>
        </Price>
      </Wrapper>
    </StyledFleetCard>
  );
};
const StyledFleetCard = styled(motion.div)`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem;
`;
const Wrapper = styled.div`
  box-shadow: 0 0 10px rgb(0 0 0 /10%);
  background: #f7f7f7;
`;
const Image = styled(motion.div)`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const Title = styled(motion.div)`
  font-size: 1rem;

  color: #333;

  h3 {
    text-align: center;
  }
`;
const Price = styled(motion.div)`
  width: 100%;
  padding: 0 1rem;

  text-transform: capitalize;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #174bad;
  }
`;

const Advantages = styled(motion.div)`
  height: 130px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ddd;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      flex: 0 1 25px;
      font-size: 0.6rem;
      list-style-type: none;
      padding: 0 1.5rem;
      font-weight: 600;
      color: #333;
      img {
        margin: 0 0.1rem;
        opacity: 0.5;
        width: 15px;
        height: 15px;
      }
    }
  }
`;
const Specs = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  border-bottom: 2px solid #ddd;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
  }
  img {
    height: 30px;
    width: 30px;
    opacity: 0.5;
  }
`;
const Buttons = styled(motion.div)`
  padding: 1rem;

  button {
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    color: white;
    font-weight: bold;
    background: #1d62e0;
    transition: 0.2s all ease-in;
    &:hover {
      background: #174bad;
    }
  }
`;
export default FleetCard;
