import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledUl = styled(motion.ul)`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    p {
      color: white !important;
    }

    .bullet-icon {
      position: static !important;
      width: 50px;
      height: 50px;
      margin-right: 1em;
    }
  }
`;
