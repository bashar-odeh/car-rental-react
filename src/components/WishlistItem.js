import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TableButton } from "../CMS/TableButton";
import { useSelector, useDispatch } from "react-redux";
import updateWishlistItem from "../actions/updateWishlistItem";
import getWishlistAction from "../actions/getWishlistAction";
const WishlistItem = ({ path, wish_id, car_id, title }) => {
  const dispatch = useDispatch();
  const base_url = "http://localhost/car-rental/admin/";

  const updateWishList = (type = "remove", car_id) => {
    dispatch(updateWishlistItem(type, car_id));
  };

  return (
    <StyledWish>
      <Image>
        <img src={`${base_url}${path}`} alt="" />
      </Image>
      <Body>
        <span>{title}</span>
        <StyledButton color="#DC3545" subcolor="#B02A37" width="true">
          <button onClick={() => updateWishList("remove", car_id)}>
            <span>Remove</span>
            <div className="icon">
              <i className={"fas fa-times"}></i>
            </div>
          </button>
        </StyledButton>
      </Body>
    </StyledWish>
  );
};

const StyledWish = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  margin: 1em 0;
`;
const Image = styled(motion.div)`
  flex: 1 1 20%;
  margin-right: 1em;
  img {
    width: 100%;
  }
`;
const Body = styled(motion.div)`
  flex: 1 1 150%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  span {
    font-size: 1.2rem;
    line-height: 40px;
  }
`;
const StyledButton = styled(TableButton)`
  margin-right: 1em;
`;
export default WishlistItem;
