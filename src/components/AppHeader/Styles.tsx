import { TextField } from "@mui/material";
import styled from "styled-components";

// Wrapper
export const Wrapper = styled.div`
  background-color: #f9be7c;
  border-radius: 0 0 35px 35px;

  padding: 1rem;
`;

// App Header Controls
export const AppHeaderControls = {
  IconContainer: styled.div`
    display: flex;
  `,

  Wrapper: styled.div`
    display: flex;
  `,
};

// App Header Content
export const AppHeaderContent = {
  AvatarContainer: styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
  `,
  InputContainer: styled.div`
    margin: 0 1rem 1rem 1rem;

    & :last-child {
      margin-bottom: 0;
    }
  `,
  TextContainer: styled.div`
    display: flex;

    flex: 1;
    flex-direction: column;

    justify-content: space-between;

    word-break: break-word;
  `,
  TextContainerLower: styled.div`
    color: #fff9eb;

    display: flex;

    justify-content: space-between;

    font-weight: bold;
  `,
  TextContainerUpper: styled.div``,
  Wrapper: styled.div`
    display: flex;

    margin-top: 16px;
  `,
};

// Avatar Progress Component
export const StyledAvatarProgress = {
  AvatarContainer: styled.div`
    background-color: #6588e4;

    clip-path: circle();

    display: flex;

    position: absolute;
  `,
  Wrapper: styled.div`
    align-items: center;

    display: flex;

    justify-content: center;
  `,
};

export const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #8c8980;

    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }

  & .MuiInputBase-input {
    color: #0d253f;

    font-family: "Nunito", sans-serif;
    font-weight: bold;

    ::placeholder {
    }
  }

  & .MuiInput-underline:before {
    border-bottom: 1px solid #6588e4;
  }

  & .MuiInput-underline:after {
    border-bottom: 2px solid #e46472;
  }

  margin-bottom: 0.5rem;
`;
