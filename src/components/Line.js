import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
const Line = () => {
  return <StyledLine></StyledLine>;
};

const StyledLine = styled(motion.div)`
  height: 2px;
  width: 100%;
  display: flex;
  background: rgb(17, 106, 196);
  margin: 1rem 0;
`;

export default Line;
