import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import FleetCard from "../FleetCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Body = ({ allCarsGallery }) => {
  return (
    <StyledBody>
      <Title>
        <h3>Cars Gallery</h3>
      </Title>
      <Container>
        {allCarsGallery.map((car, index) => (
          <FleetCard
            key={index}
            path={car.path}
            car_id={car.car_id}
            name={car.model}
            make={car.make}
            model={car.model}
            transition={car.transition}
            warranty={car.warranty}
            fuel={car.fuel}
            cost={car.cost}
          />
        ))}
      </Container>
    </StyledBody>
  );
};
const StyledBody = styled(motion.div)`
  height: 100%;
  flex: 1 1 65%;
`;
const Container = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export default Body;
