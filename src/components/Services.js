import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// components
import Service from "./Service";
//images
import like from "../images/Like.jpg";
import location from "../images/Location.jpg";
import booking from "../images/booking.jpg";
import Line from "../components/Line";
const Services = () => {
  const servicesResponse = [
    {
      img: like,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation",
      title: "Our Customers Always 100% Satisfied",
    },
    {
      img: location,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation",
      title: "We Provide Easier & Faster Bookings",
    },
    {
      img: booking,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation",
      title: "Your Choice of Any Pickup Location",
    },
  ];
  return (
    <StyledServices>
      <Title>
        <h2>OUR BENEFITS</h2>
      </Title>{" "}
      <ServicesContianer>
        {servicesResponse.map((service, index) => (
          <Service
            img={service.img}
            text={service.text}
            title={service.title}
            margin={-index * 3}
          />
        ))}
      </ServicesContianer>{" "}
    </StyledServices>
  );
};
const StyledServices = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const ServicesContianer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Title = styled(motion.div)`
  padding: 2rem;
  h2 {
    font-size: 2.6rem;
    text-align: center;
  }
`;
export default Services;
