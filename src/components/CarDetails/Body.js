import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { SliderImages } from "./E";
import Description from "./Description";
import Equipment from "./Equipment";
import Specifications from "./Specifications";
import Reviews from "./Reviews";
const Body = ({ carData, setCarStyle }) => {
  let { car_details, styles } = carData;
  let arr = [
    <Description description={car_details.description} />,
    <Equipment />,
    <Specifications car_details={car_details} />,
    <Reviews car_details={car_details} />,
  ];
  const [CurrentPanel, setCurrentPanel] = useState(0);
  return (
    <StyledBody>
      <Title>
        <h3>Mirage Range</h3>
      </Title>
      <Slider>
        <SliderImages styles={styles} />
      </Slider>
      <InfoPanel>
        <ul>
          <li
            className={0 === CurrentPanel ? "active" : ""}
            onClick={() => setCurrentPanel(0)}
          >
            Vehicle Description
          </li>
          <li
            className={1 === CurrentPanel ? "active" : ""}
            onClick={() => setCurrentPanel(1)}
          >
            Equipment
          </li>
          <li
            className={2 === CurrentPanel ? "active" : ""}
            onClick={() => setCurrentPanel(2)}
          >
            Specifications
          </li>
          <li
            className={3 === CurrentPanel ? "active" : ""}
            onClick={() => setCurrentPanel(3)}
          >
            Reviews
          </li>
        </ul>
      </InfoPanel>
      <Info>{arr[CurrentPanel]}</Info>
    </StyledBody>
  );
};
const StyledBody = styled(motion.div)`
  height: 100%;
  flex: 1 1 65%;
  min-width: 50%;
`;
const Slider = styled(motion.div)`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const InfoPanel = styled(motion.div)`
  height: 100%;
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    background: #f7f7f7;

    justify-content: space-between;
    li {
      width: 100%;
      list-style-type: none;
      text-align: center;
      margin: 0 1rem;
      position: relative;
      padding: 0.9rem 0;
      cursor: pointer;
    }
    .active {
      color: #1d62e0;
      font-weight: 600;
      &:before {
        content: "";
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
        background: #1d62e0;
      }
    }
  }
`;

export default Body;
