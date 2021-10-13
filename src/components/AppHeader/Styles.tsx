import { motion, MotionProps } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

interface AppHeaderContentWrapper extends MotionProps {
  contentHidden: boolean;
}

export const AppHeaderContent = {
  AvatarIconContainer: styled.div`
    border: 1px solid black;

    height: 80px;

    width: 80px;
  `,
  AvatarNameContainer: styled.div`
    align-items: center;

    border: 1px solid blue;

    display: flex;

    flex: 1;
    flex-direction: column;

    justify-content: center;

    word-break: break-all;
  `,
  Wrapper: styled<FC<AppHeaderContentWrapper>>(motion.div)`
    align-items: center;

    display: flex;

    margin-top: ${(props) => (props.contentHidden ? 0 : 0.5)}rem;

    transition: margin-top 0.25s ease-in-out;
  `,
};

export const AppHeaderControls = {
  Wrapper: styled(motion.div)``,
};

export const Wrapper = styled(motion.div)`
  background-color: #f9be7c;

  padding: 1rem;
`;
