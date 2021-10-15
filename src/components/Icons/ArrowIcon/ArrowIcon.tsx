import { ArrowIconProps } from "../../../contracts";
import { StyledSVG } from "./Styles";

const ArrowIcon = ({ direction }: ArrowIconProps) => {
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
        d="M5 10L12 3M12 3L19 10M12 3V21"
        stroke="#FFF9EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export default ArrowIcon;
