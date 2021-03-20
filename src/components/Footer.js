import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright All Rights Reserved.</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  min-height: 10vh;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export default Footer;
