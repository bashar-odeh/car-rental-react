import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Wish from "../WishlistItem";

import { useDispatch, useSelector } from "react-redux";
const Wishlist = () => {
  const { isLoadingWishlist, wishlist } = useSelector(
    (state) => state.getWishlist
  );
  return (
    <StyledWishlist>
      {" "}
      <Title>
        <h2>Wishlist</h2>
      </Title>
      <Wrapper>
        {!isLoadingWishlist &&
          wishlist &&
          wishlist.map((wish) => (
            <Wish path={wish.path} title={wish.model} car_id={wish.car_id} />
          ))}
      </Wrapper>
    </StyledWishlist>
  );
};
const StyledWishlist = styled(motion.div)`
  width: auto;
  height: auto;
  padding: 1rem;
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
`;
const Title = styled.div`
  h2 {
    font-size: 1.7rem;
    padding: 1rem;
    border-bottom: 2px solid #ddd;
  }
`;
const Wrapper = styled.div`
  transition: 0.75s all ease;
  padding: 1rem;
`;
export default Wishlist;
