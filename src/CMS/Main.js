import React from "react";
import Customers from "../CMS/pages/Customers";
import Cars from "../CMS/pages/Cars";
import Admin from "../CMS/pages/Admin";
import Reports from "../CMS/pages/Reports";
import { Switch, Route } from "react-router-dom";
import menu from "../images/menu.png";

// style
import styled from "styled-components";
const Main = ({ setToggleNav, toggleNav }) => {
  return (
    <Wrapper toggleNav={toggleNav}>
      <Wrap>
        <Switch>
          <Route path={["/cms/admin", "/cms/admin/:section"]} exact>
            <Admin />
          </Route>
          <Route path={["/cms/customers", "/cms/customers/:section"]} exact>
            <Customers />
          </Route>
          <Route path={["/cms/cars", "/cms/cars/:section"]}>
            <Cars />
          </Route>{" "}
          <Route path={["/cms/reports"]}>
            <Reports />
          </Route>{" "}
        </Switch>
      </Wrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.toggleNav ? "15%" : 0)};
  transition: all 0.4s ease;
`;
const Wrap = styled.div`
  width: auto;
  padding: 1rem;
`;
const StyledHaeder = styled.div`
  width: auto;
  display: flex;
  height: 10vh;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  background: white;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      border-right: 2px solid #ddd;
      padding: 1rem;
      width: 55px;
      height: 55px;
      pointer-events: none;
    }
    h2 {
      width: 100%;
      text-align: start;
      margin: 0 1rem;
      font-size: 1rem;
    }
  }
`;
export default Main;
