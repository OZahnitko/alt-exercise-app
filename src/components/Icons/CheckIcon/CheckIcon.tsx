export interface CheckIconProps {
  color?: string;
  size?: number;
}

const CheckIcon = ({ color = "0D253F", size = 24 }: CheckIconProps) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke={`#${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
