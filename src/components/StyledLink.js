import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = ({ children, path }) => {
  return <StyledLinkCom to={path}>{children}</StyledLinkCom>;
};
const StyledLinkCom = styled(Link)``;
export default StyledLink;
