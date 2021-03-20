import React, { useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import RentSpecs from "../components/CarDetails/RentSpecs";
import Body from "../components/CarDetails/Body";
import { useHistory, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
import carDataAction from "../actions/carDataAction";
import getWishlistAction from "../actions/getWishlistAction";
import { useSelector, useDispatch } from "react-redux";

const Gallery = () => {
  const { carData, isLoadingCarData } = useSelector((state) => state.carData);
  const { updateResponse } = useSelector((state) => state.updateWishlist);

  const dispatch = useDispatch();
  const location = useLocation();
  let car_id = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(carDataAction(car_id));
  }, [dispatch, updateResponse]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledGallrey>
      {isLoadingCarData && (
        <Lottie options={defaultOptions} height={200} width={200} />
      )}
      {!isLoadingCarData && carData && (
        <>
          <Body carData={carData} />
          <RentSpecs isLoadingCarData={isLoadingCarData} carData={carData} />
        </>
      )}
      {carData === false && <p>no</p>}
    </StyledGallrey>
  );
};

const StyledGallrey = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Gallery;
