import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Review from "../components/Review";
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SyledReviews>
      <Title>
        <h2>CUSTOMER REVIEWS</h2>
        <p>Lorem ipsum dolor sit amet. </p>
      </Title>
      <StyledSlider {...settings}>
        <Review />
        <Review />
        <Review />
      </StyledSlider>
    </SyledReviews>
  );
};
const SyledReviews = styled(motion.div)`
  height: 100vh;
  width: 100%;
  padding: 4rem 0;
  overflow: hidden;
`;
const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  h2 {
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 2.6rem;
  }
  p {
    height: auto;
    padding: 0;
    width: 60ch;
    text-align: Center;
  }
`;
const StyledSlider = styled(Slider)`
  padding: 2rem 4rem;
`;
export default Reviews;
