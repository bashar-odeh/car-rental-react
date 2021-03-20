import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import Line from "../components/Line";
// images
import tag from "../images/tag.png";
import like from "../images/Like.png";
import shield from "../images/Shield.png";
import alltime from "../images/247.png";
import mandriving from "../images/mandriving.jpg";
import lights from "../images/lights.jpg";
import driving from "../images/driving.jpg";
const Advantages = () => {
  return (
    <StyledAdvantages>
      <Wrapper>
        {" "}
        <LeftSide>
          <Header>
            <h3>
              Rental Service With a <br></br> wide range of Vehicles
            </h3>
            <p>
              Integer tortor bibendum est faucibus gravida aliquam nulla lectus
              lacinia eget lorem acdua eros pharetral interdum quisque convallis
              nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem
              pory.
              <br></br>
              <br></br>
              Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi
              ut aliquip exl dolor in reprehenderit voluptate velit non proident
              sunt in culpa.
            </p>
          </Header>
          <List>
            <Item>
              <img src={tag} alt="" />
              <div>
                <h4>Easy & Competitive Prices</h4>
                <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
              </div>
            </Item>{" "}
            <Item>
              <img src={shield} alt="" />
              <div>
                <h4>Breakdown Assistance</h4>
                <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
              </div>
            </Item>{" "}
            <Item>
              <img src={like} alt="" />
              <div>
                <h4>Trusted Rent Service</h4>
                <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
              </div>
            </Item>{" "}
            <Item>
              <img src={alltime} alt="" />
              <div>
                <h4>24/7 Free Customer Support</h4>
                <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
              </div>
            </Item>
          </List>
        </LeftSide>
        <RightSide>
          <FirstImage>
            <img src={mandriving} alt="" />
          </FirstImage>{" "}
          <SecondImage>
            <img src={lights} alt="" />
          </SecondImage>{" "}
          <ThirdImage>
            <img src={driving} alt="" />
          </ThirdImage>{" "}
        </RightSide>
      </Wrapper>
    </StyledAdvantages>
  );
};
const StyledAdvantages = styled(motion.div)`
  background: #f7f7f7;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 4rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;
const LeftSide = styled(motion.div)`
  height: 100%;
  width: 100%;
  flex: 1 1 50%;
`;
const RightSide = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  flex: 1 1 50%;
`;
const Header = styled(motion.div)`
  height: 100%;
  width: 100%;
  h3 {
    font-size: 2.6rem;
    text-align: start;
  }
  p {
    width: 50ch;
    font-size: 1rem;
    padding: 1rem 5rem 1rem 0;
    padding: 1rem 0;
  }
`;
const List = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
const FirstImage = styled(motion.div)`
  height: 200px;
  width: 200px;

  img {
    width: 200%;
    height: 200%;
    border-radius: 100%;
    border: 1rem solid white;
  }
`;
const SecondImage = styled(motion.div)`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 120%;
  left: 40%;
  img {
    width: 150%;
    height: 150%;
    border-radius: 100%;
    border: 1rem solid white;
  }
`;
const ThirdImage = styled(motion.div)`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 20%;
  left: 55%;
  img {
    width: 120%;
    height: 120%;
    border-radius: 100%;
    border: 1rem solid white;
  }
`;
const Item = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  p {
    padding: 0;
  }
`;
export default Advantages;
