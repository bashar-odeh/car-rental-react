import React, { useState, useEffect } from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import car1 from "../images/car1.jpg";
import FleetCard from "./FleetCard";
import { useSelector, useDispatch } from "react-redux";
import getAllCarsGallery from "../actions/getAllCarsGallery";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";

const Slider = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const { isLoadingAllcarsGallery, allCarsGallery } = useSelector(
    (state) => state.getAllCarsGallery
  );
  const [panels, setPanels] = useState([]);
  let arr = [];
  const dispatch = useDispatch();

  useEffect(() => {
    setPanels([]);
    dispatch(getAllCarsGallery());
  }, [dispatch]);
  useEffect(() => {
    if (!isLoadingAllcarsGallery) {
      arr = allCarsGallery.map((car, index) => {
        if (true) {
          return (
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
          );
        }
      });
      let temp_panel = [];
      let num = Math.ceil(arr.length / 3);
      for (let i = 0; i < num; i++) {
        temp_panel.push(arr.slice(0, 3));
        arr = arr.slice(3);
      }
      setPanels([...temp_panel]);
    }
  }, [isLoadingAllcarsGallery]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledSlider>
      {!isLoadingAllcarsGallery && (
        <>
          <PanelSlider>{panels[currentPanel]}</PanelSlider>
          <SquaresContainer>
            {panels.map((item, index) => (
              <Circels
                className={index === currentPanel ? "active" : ""}
                key={index}
                onClick={() => setCurrentPanel(index)}
              ></Circels>
            ))}
          </SquaresContainer>
        </>
      )}
      {isLoadingAllcarsGallery && (
        <Lottie options={defaultOptions} height={100} width={100} />
      )}
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  height: 100%;
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;
const PanelSlider = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: Center;
  display: flex;
  flex-wrap: wrap;
`;
const Circels = styled(motion.div)`
  height: 10px;
  width: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  transition: 0.5s all ease;
  border-radius: 1rem;
  background: gray;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const SquaresContainer = styled(motion.div)`
  height: 5vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    background-color: rgb(17, 106, 196);
    transform: scale(1.5);

    transition: all 1s ease;
  }
`;
export default Slider;
