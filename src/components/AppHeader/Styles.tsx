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
  `,
  TextContainer: styled.div`
    display: flex;

    flex: 1;
    flex-direction: column;

    justify-content: space-between;

    margin-left: 1rem;

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
