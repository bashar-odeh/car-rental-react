import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
const Specifications = ({ car_details }) => {
  console.log(car_details);
  return (
    <StyledSpecs>
      <ul>
        <div>
          <li>Make</li>
          <li>{car_details.make}</li>
        </div>
        <div>
          <li>Model</li>
          <li>{car_details.model}</li>
        </div>
        <div>
          <li>Made Yaer</li>
          <li>{car_details.made_year}</li>
        </div>
        <div>
          <li>VIN</li>
          <li>{car_details.car_id}</li>
        </div>{" "}
        <div>
          <li>version</li>
          <li>1.3</li>
        </div>
        <div>
          <li>fuel</li>
          <li>{car_details.fuel}</li>
        </div>{" "}
        <div>
          <li>transmission</li>
          <li>{car_details.transition}</li>
        </div>{" "}
        <div>
          <li> Doors</li>
          <li>2</li>
        </div>
        <div>
          <li>CONDITION </li>
          <li>barnfind</li>
        </div>
        <div>
          <li>DRIVE</li>
          <li>4x4 drive</li>
        </div>
        <div>
          <li>SEATS</li>
          <li>5</li>
        </div>{" "}
        <div>
          <li> COLOR</li>
          <li>yellow</li>
        </div>{" "}
        <div>
          <li> INTERIOR COLOR:</li>
          <li>orange</li>
        </div>{" "}
        <div>
          <li>WARRANTY:</li>
          <li>{car_details.warranty}</li>
        </div>
      </ul>
    </StyledSpecs>
  );
};
const StyledSpecs = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  margin-top: 1rem;
  box-shadow: 0 0 7px rgb(0 0 0 /10%);

  ul {
    width: auto;
    list-style-type: none;
    text-transform: uppercase;
    align-items: center;
    padding: 0.5rem 0;
    font-weight: bold;

    div {
      width: 100%;
      height: auto;
      display: flex;
      border-bottom: 2px dashed #ddd;
      li:nth-of-type(2) {
        color: gray;
        font-weight: normal;
      }
    }

    li {
      flex: 1 1 100%;
      padding: 1rem 0;
      width: 100%;
    }
  }
`;
export default Specifications;
