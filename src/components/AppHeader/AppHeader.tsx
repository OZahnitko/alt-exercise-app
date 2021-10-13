import { useState } from "react";

import { MenuIcon } from "../../components";
import {
  AppHeaderContent,
  AppHeaderControls,
  StyledAvatarProgress,
  Wrapper,
} from "./Styles";

const AppHeader = () => {
  return (
    <Wrapper>
      <AppHeaderControls.Wrapper>
        <AppHeaderControls.IconContainer onClick={() => console.log("menu")}>
          <MenuIcon />
        </AppHeaderControls.IconContainer>
      </AppHeaderControls.Wrapper>
      <AppHeaderContent.Wrapper>
        <AppHeaderContent.AvatarContainer>
          <AvatarProgress />
        </AppHeaderContent.AvatarContainer>
        <AppHeaderContent.TextContainer>
          <AppHeaderContent.TextContainerUpper>
            <h2>Sasha Zahnitko</h2>
          </AppHeaderContent.TextContainerUpper>
          <AppHeaderContent.TextContainerLower>
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#6588E4",
                borderRadius: "50%",
                display: "flex",
                height: "45px",
                justifyContent: "center",
                width: "45px",
              }}
            >
              30m
            </div>
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#6588E4",
                borderRadius: "50%",
                display: "flex",
                height: "45px",
                justifyContent: "center",
                width: "45px",
              }}
            >
              400c
            </div>
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#6588E4",
                borderRadius: "50%",
                display: "flex",
                height: "45px",
                justifyContent: "center",
                width: "45px",
              }}
            >
              3
            </div>
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#6588E4",
                borderRadius: "50%",
                display: "flex",
                height: "45px",
                justifyContent: "center",
                width: "45px",
              }}
            >
              13
            </div>
          </AppHeaderContent.TextContainerLower>
        </AppHeaderContent.TextContainer>
      </AppHeaderContent.Wrapper>
    </Wrapper>
  );
};

export default AppHeader;

export const AvatarProgress = () => {
  const [avatarSize] = useState(66);
  const [radius] = useState(40);
  const [strokeWidth] = useState(4);

  const [percentage] = useState(80);

  return (
    <StyledAvatarProgress.Wrapper>
      <svg
        height={radius * 2 + strokeWidth}
        width={radius * 2 + strokeWidth}
        style={{
          strokeDasharray: `${radius * 2 * Math.PI} ${radius * 2 * Math.PI}`,
          strokeDashoffset: `${
            radius * 2 * Math.PI - (percentage / 100) * (radius * 2 * Math.PI)
          }`,
          strokeLinecap: "round",
          transform: "rotate(-90deg)",
          transition: "0.25s stroke-dashoffset",
        }}
      >
        <circle
          stroke="#E46472"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
      </svg>
      <StyledAvatarProgress.AvatarContainer>
        <svg
          width={avatarSize}
          height={avatarSize}
          viewBox="0 0 264 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="32"
            y="36"
            width="200"
            height="244"
          >
            <path
              d="M156 180.611V199H160C199.765 199 232 231.235 232 271V280H32V271C32 231.235 64.2355 199 104 199H108V180.611C90.7626 172.422 78.3722 155.687 76.3051 135.881C70.4803 135.058 66 130.052 66 124V110C66 104.054 70.3246 99.1181 76 98.1659V92C76 61.0721 101.072 36 132 36C162.928 36 188 61.0721 188 92V98.1659C193.675 99.1181 198 104.054 198 110V124C198 130.052 193.52 135.058 187.695 135.881C185.628 155.687 173.237 172.422 156 180.611Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M156 180.611V199H160C199.765 199 232 231.235 232 271V280H32V271C32 231.235 64.2355 199 104 199H108V180.611C90.7626 172.422 78.3722 155.687 76.3051 135.881C70.4803 135.058 66 130.052 66 124V110C66 104.054 70.3246 99.1181 76 98.1659V92C76 61.0721 101.072 36 132 36C162.928 36 188 61.0721 188 92V98.1659C193.675 99.1181 198 104.054 198 110V124C198 130.052 193.52 135.058 187.695 135.881C185.628 155.687 173.237 172.422 156 180.611Z"
              fill="#D0C6AC"
            />
            <path d="M296 36H32V316H296V36Z" fill="#EDB98A" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M188 115V138C188 168.928 162.928 194 132 194C101.072 194 76 168.928 76 138V115V130C76 160.928 101.072 186 132 186C162.928 186 188 160.928 188 130V115Z"
              fill="black"
              fillOpacity="0.1"
            />
          </g>
          <mask
            id="mask1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="32"
            y="183"
            width="200"
            height="97"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108 183.071C90.0813 185.076 76.2798 190.552 76.0042 204.645C50.1464 215.568 32 241.165 32 270.999V280H232V270.999C232 241.165 213.854 215.568 187.996 204.645C187.72 190.552 173.919 185.076 156 183.071V202C156 215.255 145.255 226 132 226C118.745 226 108 215.255 108 202V183.071Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108 183.071C90.0813 185.076 76.2798 190.552 76.0042 204.645C50.1464 215.568 32 241.165 32 270.999V280H232V270.999C232 241.165 213.854 215.568 187.996 204.645C187.72 190.552 173.919 185.076 156 183.071V202C156 215.255 145.255 226 132 226C118.745 226 108 215.255 108 202V183.071Z"
              fill="#B7C1DB"
            />
            <path d="M264 170H0V280H264V170Z" fill="#262E33" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M102 231.739V280H95V228.15C97.2038 229.46 99.5468 230.661 102 231.739ZM169 228.15V268.5C169 270.433 167.433 272 165.5 272C163.567 272 162 270.433 162 268.5V231.739C164.453 230.661 166.796 229.46 169 228.15Z"
              fill="#F4F4F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.9601 182.724C75.9093 185.571 65.5 191.243 65.5 202.308C65.5 222.02 98.5377 238 132 238C165.462 238 198.5 222.02 198.5 202.308C198.5 191.243 188.091 185.571 173.04 182.724C182.125 186.074 188 191.706 188 201.077C188 221.469 160.179 238 132 238C103.821 238 76 221.469 76 201.077C76 191.706 81.8751 186.074 90.9601 182.724Z"
              fill="black"
              fillOpacity="0.16"
            />
          </g>
          <mask
            id="mask2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="112"
            y="145"
            width="40"
            height="21"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M112.008 164.398C113.128 153.907 116.235 145.006 131.996 145C147.758 144.994 150.917 153.958 151.994 164.495C152.081 165.343 151.174 166 150.037 166C143.351 166 140.67 164.505 131.989 164.5C123.309 164.495 118.757 166 114.092 166C112.949 166 111.896 165.448 112.008 164.398Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M112.008 164.398C113.128 153.907 116.235 145.006 131.996 145C147.758 144.994 150.917 153.958 151.994 164.495C152.081 165.343 151.174 166 150.037 166C143.351 166 140.67 164.505 131.989 164.5C123.309 164.495 118.757 166 114.092 166C112.949 166 111.896 165.448 112.008 164.398Z"
              fill="black"
              fillOpacity="0.7"
            />
            <path
              d="M143 134H122C119.239 134 117 136.239 117 139V145C117 147.761 119.239 150 122 150H143C145.761 150 148 147.761 148 145V139C148 136.239 145.761 134 143 134Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M137.917 170H138C138 173.314 140.686 176 144 176C147.314 176 150 173.314 150 170V169V165C150 161.686 147.314 159 144 159H120C116.686 159 114 161.686 114 165V169V172C114 175.314 116.686 178 120 178C123.314 178 126 175.314 126 172V170H126.083C126.559 167.162 129.027 165 132 165C134.973 165 137.441 167.162 137.917 170Z"
              fill="#88C553"
            />
            <g filter="url(#filter0_i)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M137.917 170H138C138 173.314 140.686 176 144 176C147.314 176 150 173.314 150 170V169V165C150 161.686 147.314 159 144 159H120C116.686 159 114 161.686 114 165V169V172C114 175.314 116.686 178 120 178C123.314 178 126 175.314 126 172V170H126.083C126.559 167.162 129.027 165 132 165C134.973 165 137.441 167.162 137.917 170Z"
                fill="black"
              />
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120 130C120 134.418 125.373 138 132 138C138.627 138 144 134.418 144 130"
            fill="black"
            fillOpacity="0.16"
          />
          <path
            d="M106 118C109.314 118 112 115.314 112 112C112 108.686 109.314 106 106 106C102.686 106 100 108.686 100 112C100 115.314 102.686 118 106 118Z"
            fill="black"
            fillOpacity="0.6"
          />
          <path
            d="M158 118C161.314 118 164 115.314 164 112C164 108.686 161.314 106 158 106C154.686 106 152 108.686 152 112C152 115.314 154.686 118 158 118Z"
            fill="black"
            fillOpacity="0.6"
          />
          <path
            d="M91.9758 99.1279C93.471 89.6047 106.059 83.1087 115.164 87.301C116.167 87.763 117.355 87.3242 117.817 86.3208C118.279 85.3175 117.84 84.1297 116.837 83.6677C105.349 78.3782 89.9358 86.3325 88.0242 98.5075C87.8529 99.5987 88.5986 100.622 89.6898 100.793C90.781 100.965 91.8045 100.219 91.9758 99.1279Z"
            fill="black"
            fillOpacity="0.6"
          />
          <path
            d="M172.024 99.1279C170.529 89.6047 157.942 83.1087 148.837 87.301C147.833 87.763 146.646 87.3242 146.184 86.3208C145.722 85.3175 146.16 84.1297 147.164 83.6677C158.651 78.3782 174.064 86.3325 175.976 98.5075C176.147 99.5987 175.402 100.622 174.31 100.793C173.219 100.965 172.196 100.219 172.024 99.1279Z"
            fill="black"
            fillOpacity="0.6"
          />
          <mask
            id="mask3"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="264"
            height="280"
          >
            <path d="M264 0H0V280H264V0Z" fill="white" />
          </mask>
          <g mask="url(#mask3)">
            <mask
              id="mask4"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="73"
              y="17"
              width="117"
              height="82"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M179.15 39.9204C176.39 37.1004 173.186 34.7068 170.069 32.3065C169.382 31.7774 168.683 31.2611 168.011 30.7118C167.858 30.587 166.292 29.4657 166.105 29.0531C165.654 28.0603 165.915 28.8333 165.977 27.6486C166.056 26.1505 169.111 21.9193 166.831 20.949C165.828 20.5222 164.04 21.658 163.078 22.0331C161.196 22.7672 159.292 23.3932 157.347 23.9331C158.279 22.0763 160.055 18.3595 156.716 19.3543C154.114 20.1293 151.69 22.122 149.076 23.0594C149.941 21.6415 153.4 17.2479 150.274 17.0023C149.302 16.9258 146.471 18.7504 145.424 19.1396C142.287 20.3055 139.083 21.0591 135.79 21.6526C124.592 23.6707 111.497 23.0953 101.137 28.1935C93.1495 32.1237 85.2625 38.222 80.6484 45.9875C76.2012 53.4726 74.5378 61.6642 73.607 70.2413C72.924 76.5359 72.8684 83.0426 73.1879 89.36C73.2922 91.4298 73.525 100.971 76.532 98.0814C78.0301 96.6417 78.0191 90.8282 78.3963 88.8604C79.1473 84.9453 79.8701 81.0127 81.122 77.2227C83.3282 70.5439 85.9308 63.4297 91.4269 58.8297C94.954 55.8782 97.4308 51.8889 100.806 48.9112C102.322 47.5739 101.165 47.7131 103.603 47.8886C105.241 48.0063 106.885 48.0513 108.526 48.0942C112.322 48.1929 116.124 48.1677 119.921 48.1811C127.568 48.2087 135.179 48.3167 142.819 47.9164C146.214 47.7386 149.618 47.6423 153.004 47.3283C154.895 47.1528 158.251 45.9406 159.808 46.8669C161.233 47.7144 162.713 50.4818 163.736 51.6151C166.154 54.2936 169.036 56.3392 171.862 58.5355C177.757 63.1149 180.732 68.8667 182.523 76.0232C184.306 83.1533 183.806 89.7681 186.013 96.7848C186.402 98.0185 187.429 100.145 188.695 98.2389C188.93 97.8849 188.87 95.939 188.87 94.8193C188.87 90.2996 190.014 86.9084 190 82.3591C189.944 68.5272 189.496 50.4908 179.15 39.9204Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask4)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M179.15 39.9204C176.39 37.1004 173.186 34.7068 170.069 32.3065C169.382 31.7774 168.683 31.2611 168.011 30.7118C167.858 30.587 166.292 29.4657 166.105 29.0531C165.654 28.0603 165.915 28.8333 165.977 27.6486C166.056 26.1505 169.111 21.9193 166.831 20.949C165.828 20.5222 164.04 21.658 163.078 22.0331C161.196 22.7672 159.292 23.3932 157.347 23.9331C158.279 22.0763 160.055 18.3595 156.716 19.3543C154.114 20.1293 151.69 22.122 149.076 23.0594C149.941 21.6415 153.4 17.2479 150.274 17.0023C149.302 16.9258 146.471 18.7504 145.424 19.1396C142.287 20.3055 139.083 21.0591 135.79 21.6526C124.592 23.6707 111.497 23.0953 101.137 28.1935C93.1495 32.1237 85.2625 38.222 80.6484 45.9875C76.2012 53.4726 74.5378 61.6642 73.607 70.2413C72.924 76.5359 72.8684 83.0426 73.1879 89.36C73.2922 91.4298 73.525 100.971 76.532 98.0814C78.0301 96.6417 78.0191 90.8282 78.3963 88.8604C79.1473 84.9453 79.8701 81.0127 81.122 77.2227C83.3282 70.5439 85.9308 63.4297 91.4269 58.8297C94.954 55.8782 97.4308 51.8889 100.806 48.9112C102.322 47.5739 101.165 47.7131 103.603 47.8886C105.241 48.0063 106.885 48.0513 108.526 48.0942C112.322 48.1929 116.124 48.1677 119.921 48.1811C127.568 48.2087 135.179 48.3167 142.819 47.9164C146.214 47.7386 149.618 47.6423 153.004 47.3283C154.895 47.1528 158.251 45.9406 159.808 46.8669C161.233 47.7144 162.713 50.4818 163.736 51.6151C166.154 54.2936 169.036 56.3392 171.862 58.5355C177.757 63.1149 180.732 68.8667 182.523 76.0232C184.306 83.1533 183.806 89.7681 186.013 96.7848C186.402 98.0185 187.429 100.145 188.695 98.2389C188.93 97.8849 188.87 95.939 188.87 94.8193C188.87 90.2996 190.014 86.9084 190 82.3591C189.944 68.5272 189.496 50.4908 179.15 39.9204Z"
                fill="#1F3140"
              />
              <path d="M263 0H-1V280H263V0Z" fill="#4A312C" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_i"
              x="114"
              y="158"
              width="36"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      </StyledAvatarProgress.AvatarContainer>
    </StyledAvatarProgress.Wrapper>
  );
};
