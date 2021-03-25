import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
import step1 from "../images/steps01.png";
import step2 from "../images/steps02.png";
import step3 from "../images/steps03.png";
const HowDoWeWork = () => {
  return (
    <StyledWork>
      <iframe
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        src="https://www.youtube.com/embed/b1Qh9lLGg8E?playlist=b1Qh9lLGg8E&amp;iv_load_policy=3&amp;enablejsapi=1&amp;disablekb=1&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;wmode=transparent&amp;widget_referrer=http%3A%2F%2Fpreview.themeforest.net%2F&amp;origin=https%3A%2F%2Fautostar.templines.org&amp;widgetid=1"
      ></iframe>

      <FloatingData>
        <Title>
          <h2>HOW DOES THE AUTOSTAR RENTAL WORKS</h2>
        </Title>
        <Steps>
          <Step>
            <img src={step1} alt="" />
            <p>Once seected, Book our auto and set a pickup date / time</p>
          </Step>
          <Step>
            <img src={step2} alt="" />{" "}
            <p>Once seected, Book our auto and set a pickup date / time</p>
          </Step>
          <Step>
            <img src={step3} alt="" />{" "}
            <p>Once seected, Book our auto and set a pickup date / time</p>
          </Step>
        </Steps>
      </FloatingData>
    </StyledWork>
  );
};
const StyledWork = styled(motion.div)`
  height: 80vh;
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 85%);
  width: 100%;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: relative;
    transform: scale(1.4);
    @media (max-width: 500px) {
      transform: scale(2);
    }
  }
`;
const Title = styled(motion.div)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  h2 {
    width: 30ch;
    font-size: 2.6rem;
  }
`;
const Steps = styled(motion.div)`
  display: flex;
`;
const Step = styled(motion.div)`
  display: flex;
  flex: 1 1 30%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  img {
    margin: 0 1rem;
  }
  p {
    font-size: 1.3rem;
  }
`;
const FloatingData = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 8rem;
  @media (max-width: 1200px) {
    padding: 0 2rem;
    ${Title} {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 850px) {
    padding: 0;
    ${Title} {
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
    }
    ${Steps} {
      display: flex;
      flex-direction: column;
    }
    ${Step} {
      margin: 0;

      p {
        font-size: 0.8rem;
        width: 30ch;
      }
    }
  }
`;

export default HowDoWeWork;
