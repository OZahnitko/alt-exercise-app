import styled from "styled-components";

import { ArrowIconDirection, ArrowIconProps } from "../../../contracts";

export const StyledSVG = styled.svg<ArrowIconProps>`
  transform: rotate(
    ${(props) =>
      props.direction === ArrowIconDirection.up
        ? 0
        : props.direction === ArrowIconDirection.right
        ? 90
        : props.direction === ArrowIconDirection.down
        ? 180
        : props.direction === ArrowIconDirection.left
        ? 270
        : 0}deg
  );

  transition: transform 0.25s ease-in-out;
`;
