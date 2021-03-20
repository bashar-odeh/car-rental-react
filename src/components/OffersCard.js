import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
const OffersCard = ({ image, title, price, description }) => {
  return (
    <StyledOfferCard>
      <Image>
        <img src={image} alt="x" />
      </Image>
      <Title>
        <h3>{title}</h3>{" "}
      </Title>
      <Price>{price}</Price>
      <Description>{description}</Description>
      <Buttons>
        <button>Veiw Offer</button>
      </Buttons>
    </StyledOfferCard>
  );
};
const StyledOfferCard = styled(motion.div)`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 0 10px rgb(0 0 0 /30%);
  margin: 1rem;
  background: red;
`;
const Image = styled(motion.div)`
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const Title = styled(motion.div)`
  font-size: 1.3rem;
  color: #333;
  padding: 1rem;
`;
const Price = styled(motion.div)`
  padding: 0 1rem;
  font-size: 1.5rem;
  text-transform: capitalize;
`;
const Description = styled(motion.div)`
  padding: 1rem;
  line-height: 150%;
`;
const Buttons = styled(motion.div)`
  padding: 1rem;
  width: 100%;

  button {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    background: rgb(17, 106, 196);
  }
`;
export default OffersCard;
