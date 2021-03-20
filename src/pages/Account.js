import React, { useState, useEffect } from "react";
//STYLE
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import userDataAction from "../actions/userDataAction";
import getWishlistAction from "../actions/getWishlistAction";
import getCustomerDealsAction from "../actions/getCustomerDealsAction";
//ANIMATION
import { motion } from "framer-motion";
import Dashboard from "../components/AccountComponents/Dashboard";
import AccountDetails from "../components/AccountComponents/AccountDetails";
import Wishlist from "../components/AccountComponents/Wishlist";
import { useLocation, Link } from "react-router-dom";
const Account = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ArrayOfItems = [<Dashboard />, <AccountDetails />, <Wishlist />];
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isLoadingWishlist, wishlist } = useSelector(
    (state) => state.getWishlist
  );

  useEffect(() => {
    //
    let indicator = pathname.split("/")[2];
    let navItems = document.querySelectorAll(".item");
    for (let i = 0; i < navItems.length; i++) {
      console.log(navItems[i]);
      if (navItems[i].innerText.toLowerCase().trim() === indicator) {
        navItems[i].nextSibling.children[0].classList.add(
          "active-cms-nav-expantion"
        );
      }
    }
  }, []);
  useEffect(() => {
    dispatch(userDataAction());
    dispatch(getWishlistAction());
    dispatch(getCustomerDealsAction());
  }, [dispatch]);
  const { updateResponse } = useSelector((state) => state.updateWishlist);
  useEffect(() => {
    if (updateResponse === true) {
      dispatch(getWishlistAction());
    }
  }, [updateResponse]);
  return (
    <StyledAccount>
      <StyledNavbar>
        <List>
          <Item
            onClick={() => {
              setCurrentPage(0);
            }}
          >
            <li>
              <div>
                <i class="fas fa-border-all"></i>
                <span>Dashboard</span>
              </div>
            </li>
          </Item>{" "}
          <Item
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            <li>
              <div>
                <i class="fas fa-user-alt"></i>
                <span>Account Data</span>
              </div>
            </li>
          </Item>{" "}
          <Item
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            <li>
              <div>
                <i class="fas fa-user-alt"></i>
                <span>Wishlist</span>
              </div>
            </li>
          </Item>
          <Item>
            <li>
              <div>
                <i class="fas fa-car"></i>
                <span>Logout</span>
              </div>
            </li>
          </Item>
        </List>
      </StyledNavbar>
      <Wrapper>{ArrayOfItems[currentPage]}</Wrapper>
    </StyledAccount>
  );
};

const StyledAccount = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  transition: 0.75s all ease;
  padding: 2rem;
  margin-left: 15%;
`;
const StyledNavbar = styled(motion.div)`
  position: fixed;
  height: 100%;
  top: 10%;
  left: 0;
  width: 15%;
  transform: translateX(0);
  transition: 0.5s all ease;
  opacity: 1;
  overflow-y: auto;

  ul {
    padding: 2rem 0;
  }
`;
const Item = styled(motion.div)`
  width: 100%;
  height: 8vh;
`;

const List = styled.ul`
  background: #252b3b;
  color: white;
  transition: all 0.75s ease;
  height: 50vh;
  min-height: 100vh;
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

  @media (max-width: 900px) {
    width: auto;
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
export default Account;
