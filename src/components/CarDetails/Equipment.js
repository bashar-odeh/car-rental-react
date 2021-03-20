import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
const Equipment = () => {
  return (
    <StyledEquipment>
      <ul>
        <li>
          <i>+</i>
          Pay at Pick-Up
        </li>
        <li>
          <i>+</i>
          Automatic
        </li>
        <li>
          <i>+</i>
          Audio input{" "}
        </li>
        <li>
          <i>+</i>
          Budget Car{" "}
        </li>
        <li>
          <i>+</i>
          Free cancellation{" "}
        </li>
        <li>
          <i>+</i>
          Bluetooth{" "}
        </li>
        <li>
          <i>+</i>
          Chilled AC{" "}
        </li>
        <li>
          <i>+</i>
          Unlimited Mileage{" "}
        </li>{" "}
        <li>
          <i>+</i>
          Heated seats{" "}
        </li>
      </ul>
    </StyledEquipment>
  );
};
const StyledEquipment = styled(motion.div)`
  height: 30vh;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-top: 1rem;
    gap: 1rem;
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      border-bottom: 2px dashed #ddd;
      padding: 0.5rem 0;
      color: gray;
      i {
        font-style: normal;
        margin-right: 0.5rem;
        color: rgb(16, 106, 196);
        font-size: 1.5rem;
      }
    }
  }
`;
export default Equipment;
