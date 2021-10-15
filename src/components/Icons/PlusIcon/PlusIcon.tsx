export interface PlusIconProps {
  color?: string;
  size?: number;
}

const PlusIcon = ({ color = "0D253F", size = 24 }: PlusIconProps) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M20 12L4 12"
        stroke={`#${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
