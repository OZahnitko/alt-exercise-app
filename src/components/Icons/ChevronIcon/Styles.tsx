import styled from "styled-components";

import { ChevronIconDirection, ChevronIconProps } from "../../../contracts";

export const StyledSVG = styled.svg<ChevronIconProps>`
  transform: rotate(
    ${(props) =>
      props.direction === ChevronIconDirection.up
        ? 0
        : props.direction === ChevronIconDirection.right
        ? 90
        : props.direction === ChevronIconDirection.down
        ? 180
        : props.direction === ChevronIconDirection.left
        ? 270
        : 0}deg
  );

  transition: transform 0.25s ease-in-out;
`;
