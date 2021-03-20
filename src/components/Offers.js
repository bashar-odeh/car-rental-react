import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//ROUTING
import { Link } from "react-router-dom";
// components
import Slider from "./Slider";
import FleetCard from "./FleetCard";
// images
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";

const Offers = () => {
  return (
    <StyledOffers>
      <Title>
        <h2>OUR RENTAL FLEETS</h2>
        <p>
          Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor
          reprehenderit voluptate velit cillum dolore fugiat lore ipsum dolor
          sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
        </p>
      </Title>
      <Slider></Slider>
    </StyledOffers>
  );
};
const StyledOffers = styled(motion.div)`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: white;
  margin-top: 4rem;
  padding: 2rem;
`;
const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 2.6rem;
  }
  p {
    height: auto;
    padding: 1.6rem;
    width: 60ch;
  }
`;
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export default Offers;
