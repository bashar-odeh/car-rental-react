import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  let headerResponse = [
    {
      img: banner1,
      header: "Check our offers Now",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod architecto ducimus natus consequuntur asperiores eveniet laborum labore dolor soluta voluptatum. Tempore possimus fuga incidunt odio nemo quaerat sit atque nam?",

      button: "Our Services",
    },
    {
      img: banner2,
      header: "Check our offers Now",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod architecto ducimus natus consequuntur asperiores eveniet laborum labore dolor soluta voluptatum. Tempore possimus fuga incidunt odio nemo quaerat sit atque nam?",
      button: "Our Offers",
    },
    {
      img: banner3,
      header: "Check our offers Now",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod architecto ducimus natus consequuntur asperiores eveniet laborum labore dolor soluta voluptatum. Tempore possimus fuga incidunt odio nemo quaerat sit atque nam?",
      button: "Fearured Cars",
    },
  ];

  const changeBanner = (index) => {
    setCurrentBanner(index);
  };
  const shuffleBanner = () => {};

  useEffect(() => {
    setInterval(() => {
      setCurrentBanner((previous) => (previous + 1) % headerResponse.length);
    }, 10000);
    return () => {};
  }, []);
  return (
    <HeaderStyled img={headerResponse[currentBanner].img}>
      <LeftStyle>
        <Title>
          <h2>{headerResponse[currentBanner].header}</h2>
        </Title>
        <Description>
          <p>{headerResponse[currentBanner].text}</p>
        </Description>
        <Buttons>
          <Button>{headerResponse[currentBanner].button}</Button>
        </Buttons>
      </LeftStyle>
      <SquaresContainer>
        {headerResponse.map((square, index) => (
          <Circels
            className={index === currentBanner ? "active" : ""}
            key={index}
            onClick={() => changeBanner(index)}
          ></Circels>
        ))}
      </SquaresContainer>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  min-height: 80vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width: 1200px) {
    padding: 1rem 4rem;
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    text-align: center;

    display: flex;
    flex-direction: column;
  }
`;
const Title = styled(motion.div)`
  font-size: 1.7rem;
  h2 {
    font-size: 2.6rem;
  }
  text-transform: capitalize;
`;
const Description = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 150%;

  min-width: 50%;
  p {
    width: 40ch;
    font-size: 1.3rem;
  }
`;
const Buttons = styled(motion.div)`
  font-size: 1.5rem;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LeftStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(0, 0, 0, 0.5);
  padding: 4rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 770px) {
    ${Description} {
      p {
        font-size: 1rem;
        text-align: start;
      }
    }
  }
  @media (max-width: 600px) {
    ${Description} {
      text-align: start;
    }
  }
  @media (max-width: 600px) {
    ${Description} {
    }
    ${Buttons} {
      button {
        font-size: 1rem;
        padding: 1rem;
        margin: 0;
      }
    }
  }
  @media (max-width: 320px) {
    ${Title} {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const ButtonPrimary = styled.button`
  padding: 1.2rem 1.8rem;
  margin-right: 1rem;
  border: none;

  font-size: 1.3rem;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
`;
const Button = styled(ButtonPrimary)`
  background: #174bad;
`;
const Circels = styled(motion.div)`
  height: 10px;
  width: 10px;
  background-color: gray;
  padding: 0.5rem;
  margin: 0.5rem;
  transition: 0.5s all ease;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const SquaresContainer = styled(motion.div)`
  height: 5vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    background-color: #174bad;
    transform: scale(1.5);

    transition: all 1s ease;
  }
`;
export default Header;
