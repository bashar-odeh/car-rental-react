import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
const Description = () => {
  return (
    <StyledDescription>
      <p>
        This 2018 model car is Brilliant Black Crystal Pearlcoat with a
        Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Ram
        Surprise has been exceeding customer expectations for many years and
        always provide customers with a great value! <br></br>
        <br></br> Sit amet consectetura dipisicing elit dui sed eiusmod
        ciltempor incididunt uet labore uset dolore magna aliqua minim veniam
        quisnostrud exercitation. Slamco em laborisa aliquip ex ea comdo
        consequat uis sed auted irure rehenderit voluptate velit esse cillum
        doloreu fugiat nulla sed pariatura ipsum dolor am consecteu adipis elit
        sed do eiusmod tempora incididunt. Lorem ipsum dolor sitamet,
        consectetur adipisicing elit sedo eius tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea comodo consequat aute irure
        reprehen deritin voluptate velit esse cillum dolore eu fugiat nula
        pariatur excepteur sint cupidatat no proident sunt in culpa qui officia
        deserunt mollit anim. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
      </p>
    </StyledDescription>
  );
};
const StyledDescription = styled(motion.div)`
  padding: 2rem 0;
  p {
    line-height: 150%;
  }
`;
export default Description;
