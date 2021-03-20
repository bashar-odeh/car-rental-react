import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import avatar from "../images/avatar.jpg";
import quotes from "../images/quotes.png";
const Review = () => {
  return (
    <SyledReview>
      <Image>
        {" "}
        <img src={avatar} alt="" />
      </Image>
      <Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit
          quae dicta expedita, dolorum nobis totam mollitia asperiores adipisci
          debitis voluptatum accusantium dolorem earum quod, laboriosam incidunt
          harum! Nam rerum itaque dicta obcaecati vero.
        </p>
        <img src={quotes} alt="" />
      </Text>
      <Name>
        <span>JOHN KERRY</span>
        <span>A Customer</span>
      </Name>
    </SyledReview>
  );
};
const Text = styled.div`
  height: 250px;
  width: 800px;
  position: absolute;
  background: white;
  box-shadow: 0 0 7px rgb(0 0 0 /10%);
  top: 15%;
  left: 25%;
  p {
    width: 70ch;
    font-size: 1.1rem;
    padding: 4rem;
    line-height: 150%;
  }
  img {
    position: absolute;
    top: -10%;
    left: 90%;
  }
`;
const Name = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0 0 7px rgb(0 0 0 /20%);
  bottom: 5%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const SyledReview = styled(motion.div)`
  height: 50vh;
  width: 100%;
  position: relative;
  cursor: grab;
  background: #f7f7f7;

  @media (max-width: 1350px) {
    ${Text} {
      width: 800px;
      height: 200px;
      left: 20%;
      p {
        padding: 2rem;
        font-size: 1rem;
      }
    }
    ${Name} {
      bottom: 2%;
    }
  }
  @media (max-width: 1100px) {
    ${Text} {
      width: 600px;
      height: 200px;
      p {
        padding: 2rem;
        width: 55ch;
      }
    }
  }
  @media (max-width: 800px) {
    ${Text} {
      width: 450px;
      height: 200px;
      left: 30%;
      p {
        padding: 2rem;
        width: 50ch;
        font-size: 0.9rem;
      }
      img {
        position: absolute;

        left: 80%;
      }
    }
  }
  @media (min-width: 1440px) {
    ${Text} {
      width: 900px;
      height: 250px;
      top: 10%;
      left: 20%;
      p {
        font-size: 1.3rem;
      }
    }

    ${Name} {
      bottom: 2%;
    }
  }
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: auto;
  }
`;

export default Review;
