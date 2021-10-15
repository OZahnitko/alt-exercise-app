import { ChevronIconProps } from "../../../contracts";
import { StyledSVG } from "./Styles";

const ChevronIcon = ({ direction }: ChevronIconProps) => {
  return (
    <StyledSVG
      direction={direction}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15L12 8L19 15"
        stroke="#0D253F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export default ChevronIcon;
