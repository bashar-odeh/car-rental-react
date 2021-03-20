import React from "react";
import styled from "styled-components";

const PageWrapper = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
const StyledPageWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  box-shadow: 0 0 7px rgb(0, 0, 0, 0.2);
  padding: 2rem;
  padding-bottom: 1rem;
  background: white;
`;
export default PageWrapper;
