import React, { useState, useRef, useEffect } from "react";
// Style
import styled from "styled-components";
// animation
import { motion } from "framer-motion";
// images

import { Link } from "react-router-dom";
import navbg from "../images/Liquid-Cheese.svg";
import { useLocation, useHistory } from "react-router-dom";
const CMSnavbar = ({ toggleNav, setToggleNav }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [current, setCurrent] = useState(null);
  const ExpandHandler = (e) => {
    try {
      e.target.nextSibling.children[0].classList.toggle(
        "active-cms-nav-expantion"
      );
      arrowSwapper(e.target);
    } catch (error) {}
  };
  const arrowSwapper = (e) => {
    // let element = e.children[0].children[1].children[0].classList;
    try {
      let attr = parseInt(
        e.children[0].children[1].children[0].getAttribute("angle")
      );
      console.log(e.children[0].children[1].children[0].getAttribute("angle"));
      let element = e.children[0].children[1].children[0];
      element.style.transform = `rotate(${attr + 180}deg)`;
      console.log(attr);
      element.setAttribute("angle", (attr += 180));
    } catch (Exception) {}

    // if (element.contains("fa-chevron-down")) {
    //   element.remove("fa-chevron-down");
    //   element.add("fa-chevron-up");
    // } else {
    //   element.add("fa-chevron-down");
    //   element.remove("fa-chevron-up");
    // }
  };
  const subMenuHandler = (e) => {
    //   let secondIndicator = pathname.split("/")[3];
    //   let subNavItems = document.querySelectorAll(".sub-items");
    //   for (let i = 0; i < subNavItems.length; i++) {
    //     let text = subNavItems[i].innerText.split(" ");
    //     subNavItems[i].classList.remove("active-li");
    //     if (text.join("").trim().toLowerCase() === secondIndicator) {
    //       subNavItems[i].classList.toggle("active-li");
    //     }
    //   }
  };
  useEffect(() => {
    try {
      let indicator = pathname.split("/")[2];
      let navItems = document.querySelectorAll(".item");
      for (let i = 0; i < navItems.length; i++) {
        console.log(navItems[i]);
        if (navItems[i].innerText.toLowerCase().trim() === indicator) {
          navItems[i].nextSibling.children[0].classList.add(
            "active-cms-nav-expantion"
          );
          arrowSwapper(navItems[i]);
        }
      }
    } catch (error) {}
    // let secondIndicator = pathname.split("/")[3];
    // let subNavItems = document.querySelectorAll(".sub-items");
    // console.log(secondIndicator);
    // for (let i = 0; i < subNavItems.length; i++) {
    //   let text = subNavItems[i].innerText.split(" ");
    //   subNavItems[i].classList.remove("active-li");
    //   if (text.join("").trim().toLowerCase() === secondIndicator) {
    //     subNavItems[i].classList.toggle("active-li");
    //   }
    // }
  }, []);
  return (
    <StyledNavbar className={toggleNav ? "active cms-nav" : "cms-nav"}>
      <List>
        {/* <div className="prof-continaer">
          <div className="prof"></div>
          <span>Bashar Odeh</span>
        </div> */}
        <Item>
          <StyledLink className="item" onClick={ExpandHandler} to="/cms/admin">
            <li>
              <div>
                <i class="fas fa-border-all"></i>
                <span>Dashboard</span>
              </div>
              <span>
                <i angle="0deg" class="fas fa-chevron-down"></i>
              </span>
            </li>
          </StyledLink>
          <Hide>
            <Expand>
              <StyledLink to="/cms/admin/managment">
                <li onClick={subMenuHandler}>Managment</li>
              </StyledLink>
            </Expand>
          </Hide>
        </Item>{" "}
        <Item>
          <StyledLink
            className="item"
            onClick={ExpandHandler}
            to="/cms/customers"
          >
            <li>
              <div>
                <i class="fas fa-user-alt"></i>
                <span>Customers</span>
              </div>
              <span>
                <i angle="0deg" className="fas fa-chevron-down"></i>
              </span>
            </li>
          </StyledLink>
          <Hide>
            <Expand>
              <StyledLink
                to="/cms/customers/allcustomers"
                onClick={() => setToggleNav(false)}
              >
                <li onClick={subMenuHandler} className="sub-items">
                  All Customers
                </li>
              </StyledLink>{" "}
              <StyledLink to="/cms/customers/managecustomers">
                <li onClick={subMenuHandler} className="sub-items">
                  Manage customers
                </li>
              </StyledLink>
            </Expand>
          </Hide>
        </Item>
        <Item>
          <StyledLink className="item" onClick={ExpandHandler} to="/cms/cars">
            <li>
              <div>
                <i className="fas fa-car"></i>
                <span>Cars</span>
              </div>
              <span>
                <i angle="0deg" className="fas fa-chevron-down"></i>
              </span>
            </li>
          </StyledLink>
          <Hide>
            <Expand>
              <StyledLink
                onClick={() => setToggleNav(false)}
                to="/cms/cars/allcars"
              >
                <li className="sub-items">All Cars</li>
              </StyledLink>
              <StyledLink onClick={subMenuHandler} to="/cms/cars/addcar">
                <li className="sub-items">Add car</li>
              </StyledLink>
            </Expand>
          </Hide>
        </Item>
        <Item>
          <StyledLink
            className="item"
            onClick={ExpandHandler}
            to="/cms/reports"
          >
            <li>
              <div>
                <i class="fas fa-comment-dots"></i> <span>Reports</span>
              </div>
              <span>
                <i angle="0deg" className="fas fa-chevron-down"></i>
              </span>
            </li>
          </StyledLink>
          <Hide>
            <Expand>
              <StyledLink
                onClick={() => setToggleNav(false)}
                to="/cms/reports/archive"
              >
                <li className="sub-items">Archive</li>
              </StyledLink>
            </Expand>
          </Hide>
        </Item>
        <Item>
          <StyledLink className="item" onClick={ExpandHandler} to="/cms-login">
            <li>
              <div>
                <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
              </div>
            </li>
          </StyledLink>
        </Item>
      </List>
    </StyledNavbar>
  );
};
const StyledNavbar = styled(motion.div)`
  position: fixed;
  top: 10%;
  height: 100%;
  width: 15%;
  transform: translateX(-100%);
  transition: 0.5s all ease;
  opacity: 0;
  overflow-y: auto;

  ul {
    padding: 2rem 0;
    li {
    }
  }
  .active-li {
    margin-left: 2rem;
    background: black;
    color: black;
  }
  .active-cms-nav-expantion {
    opacity: 1;
    max-height: 50vh;

    li {
      border: none;
      color: white;
      font-weight: 500;
      margin-left: 1rem;
      padding: 0.5rem;
      &:before {
        content: "-";
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
  }
  h2 {
    padding: 1rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1000px) and (min-width: 790px) {
    width: 20%;
  }
`;
const Item = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
const Expand = styled(motion.div)`
  transition: all 0.2s ease-in-out;
  max-height: 0;
  background: rgb(0, 0, 0, 0.5); ;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Logo = styled.div`
  overflow: hidden;
`;

const List = styled.ul`
  height: auto;
  min-height: 100vh;
  overflow: auto;
  background-repeat: no-repeat;
  background: #252b3b;
  background-size: cover;
  color: white;
  transition: all 0.75s ease;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.5);
  li {
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding: 1rem;
    font-size: 0.8rem;
    transition: 0.2s all ease-in-out;
    pointer-events: all;
    cursor: pointer;
    pointer-events: none;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      flex: 1 1 90%;
    }
    span {
      display: flex;
      align-items: center;
      flex: 1 1 10%;
      i {
        font-size: 0.8rem;
      }
    }
    i {
      font-size: 1.3rem;
      margin-right: 10px;
    }
  }

  .prof {
    height: 150px;
    width: 150px;
    background: white;
    border-radius: 50%;
    li span {
      padding: 1rem;
    }
  }
  .prof-continaer {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    border-bottom: 1px solid #ddd;

    span {
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }
`;
export default CMSnavbar;
