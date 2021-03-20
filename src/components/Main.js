import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// IMAGES

import Services from "./Services";
import HowDoWeWork from "../components/HowDoWeWork";
import Offers from "../components/Offers";
import Advantages from "../components/Advantages";
import Reviews from "../components/Reviews";

const Main = () => {
  return (
    <StyledMain>
      <Services />
      <HowDoWeWork />
      <Offers />
      <Advantages />
      <Reviews />
    </StyledMain>
  );
};

const StyledMain = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

export default Main;
