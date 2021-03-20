import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutURL } from "../api";
import isUserLoggedInAction from "../actions/isUserLoggedInAction";
import navbg from "../images/Liquid-Cheese.svg";

//css
const Navbar = () => {
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.userStatus);
  const userLogout = async () => {
    let res = await axios.get(logoutURL(), { withCredentials: true });
    dispatch(isUserLoggedInAction());
  };
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav");

    if (window.pageYOffset >= 200) {
      nav.classList.add("active-nav");
    } else {
      nav.classList.remove("active-nav");
    }
  });

  return (
    <Wrapper>
      <StyledNav className="nav">
        <StyledLink to="/">
          <StyledLogo className="logo">
            <span>Logo</span>
          </StyledLogo>
        </StyledLink>
        <ul>
          <StyledLink to={"/"}>
            <li>Home</li>
          </StyledLink>
          <StyledLink to={"/gallery"}>
            <li>Gallery</li>
          </StyledLink>
          {!userStatus && (
            <StyledLink to={"/login"}>
              <li>Login</li>
            </StyledLink>
          )}
          {!userStatus && (
            <StyledLink to={"/signup"}>
              <li>Sign up</li>
            </StyledLink>
          )}{" "}
          {userStatus && (
            <StyledLink to={"/account"}>
              <li>Profile</li>
            </StyledLink>
          )}
          {userStatus && (
            <StyledLink onClick={userLogout} to={"/"}>
              <li>Logout</li>
            </StyledLink>
          )}
        </ul>
      </StyledNav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .active-nav {
    position: fixed;
    top: 0;
  }
`;
const StyledNav = styled(motion.nav)`
  height: 10vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  font-weight: bold;
  padding: 0 8rem;
  transition: top 1s ease;
  background-size: cover;
  box-shadow: 0 0 7px black;
  background-repeat: no-repeat;
  background: white;
  ul {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    li {
      font-size: 1rem;

      list-style: none;
      padding: 0rem 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1.2rem;
    ul {
      li {
        padding: 0rem 0.5rem;
        margin: 0rem 0.5rem;
      }
    }
  }
  @media (max-width: 570px) {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 570px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  color: black;
  width: auto;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;
const StyledLogo = styled(motion.div)`
  cursor: pointer;
  width: auto;

  span {
    font-size: 2rem;
    color: white;
  }

  color: black;
  @media (max-width: 570px) {
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 1200px) {
    span {
      font-size: 1rem;
    }
  }
`;
export default Navbar;
