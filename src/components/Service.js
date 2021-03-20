import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// IMAGES

const Service = ({ img, title, text, margin }) => {
  return (
    <StyledService margin={margin}>
      <Image>
        <img src={img} alt="" />
      </Image>
      <Title>
        <h3>{title}</h3>
      </Title>
      <Description>
        <p>{text}</p>
      </Description>
    </StyledService>
  );
};
const StyledService = styled(motion.div)`
  height: 100%;
  flex: 1 1 30%;
  margin: 0 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled(motion.div)`
  img {
    width: 120px;
    height: 120px;
  }
`;

const Description = styled(motion.div)`
  padding: 1rem 0;
  color: #666666;
  p {
    width: 40ch;
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    width: 30ch;
  }
`;

const Title = styled(motion.div)`
  padding: 0 2rem;
  text-align: center;
  h3 {
    text-align: center;
    font-size: 1.3rem;
  }
`;

export default Service;
