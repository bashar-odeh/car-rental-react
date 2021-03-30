import React, { useState, useEffect } from "react";
import Navbar from "../CMS/CMSnavbar";
import Main from "../CMS/Main";
import { useLocation, Redirect, useHistory } from "react-router-dom";
// style
import styled from "styled-components";
// images
import menu from "../images/menu.png";
import { useDispatch, useSelector } from "react-redux";
import isAdminLoggedInAction from "../actions/isAdminLoggedInAction";
const CMS = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const { pathname } = useLocation();
  const { adminStatus, routeHolder } = useSelector(
    (state) => state.isAdminLoggedIn
  );
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <StyledHaeder>
        {/* {adminStatus && <Redirect to={pathname} />}
        {adminStatus === false && <Redirect to="/cms-login" />} */}
        <div className="header"></div>
        <div onClick={() => setToggleNav(!toggleNav)}>
          <img src={menu} alt="" /> <h2>Car Rental</h2>
        </div>
      </StyledHaeder>
      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav} />

      <Main toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f7f7f7;
  min-height: 100vh;
  width: 100%;
  .active {
    transform: translateX(0);
    opacity: 1;
  }
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
export default CMS;
