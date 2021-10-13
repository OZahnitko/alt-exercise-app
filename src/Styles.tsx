import { motion } from "framer-motion";
import styled from "styled-components";

export const AppContentContainer = styled(motion.div)`
  border: 1px solid blue;

  overflow: hidden auto;

  flex: 1;
`;

export const AppHeaderContainer = styled(motion.div)``;

export const RootWrapper = styled(motion.div)`
  height: 100%;

  display: flex;

  flex-direction: column;

  overflow: hidden;
`;
