import React, { useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Filter from "../components/Gallery/Filter";
import Body from "../components/Gallery/Body";
import { useHistory, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";

import { useSelector, useDispatch } from "react-redux";
import getAllCarsGallery from "../actions/getAllCarsGallery";
const Gallery = () => {
  const { isLoadingAllcarsGallery, allCarsGallery } = useSelector(
    (state) => state.getAllCarsGallery
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsGallery());
  }, [dispatch]);
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
      {isLoadingAllcarsGallery && (
        <Lottie options={defaultOptions} height={200} width={200} />
      )}{" "}
      {!isLoadingAllcarsGallery && (
        <>
          <Body allCarsGallery={allCarsGallery} />
          <Filter />
        </>
      )}
    </StyledGallrey>
  );
};

const StyledGallrey = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

export default Gallery;
